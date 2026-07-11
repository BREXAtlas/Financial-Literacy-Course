#!/usr/bin/env node
// Ram Ready Financial Futures — Static Site Validator
// Run with: node scripts/validate-site.mjs

import { readFile, access } from "node:fs/promises";
import { constants as FS } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
let failures = 0;
let warnings = 0;

function fail(msg) {
  console.error(`✗ ${msg}`);
  failures += 1;
}
function warn(msg) {
  console.warn(`! ${msg}`);
  warnings += 1;
}
function pass(msg) {
  console.log(`✓ ${msg}`);
}

async function exists(relPath) {
  try {
    await access(path.join(ROOT, relPath), FS.F_OK);
    return true;
  } catch {
    return false;
  }
}

const REQUIRED_FILES = [
  "index.html", "foundations.html", "wealth-quest.html", "journey.html", "achievements.html",
  "profile.html", "sources.html", "instructor-guide.html", "privacy.html", "disclaimer.html",
  "auth-callback.html", "onboarding.html",
  "assets/styles.css", "assets/print.css", "assets/site.js", "assets/profile-engine.js",
  "assets/personalization-engine.js", "assets/story-engine.js", "assets/quest-engine.js",
  "assets/game-engine.js", "assets/calculator-engine.js", "assets/calculator-widget.js",
  "assets/source-renderer.js", "assets/choice-cards.js", "assets/concept-section.js",
  "assets/visualization-engine.js",
  "assets/accessibility.js", "assets/certificate.js", "assets/auth-sync.js",
  "assets/course-cloud-bridge.js", "assets/supabase-config.example.js",
  "data/onboarding-options.js", "data/source-registry.js", "data/foundations-story.js",
  "data/wealth-quests.js", "data/story-fragments.js", "data/achievements.js",
  "data/calculator-assumptions.js", "data/glossary.js", "data/visualizations.js",
  "llm/llm-provider.js", "llm/template-provider.js", "llm/webllm-provider.js",
  "llm/ollama-provider.js", "llm/output-validator.js",
  "supabase/migrations/create_financial_literacy_profiles_and_progress.sql",
  "docs/CURRICULUM_MAP.md", "docs/STORY_ARCHITECTURE.md", "docs/PERSONALIZATION_MODEL.md",
  "docs/OPEN_SOURCE_AI.md", "docs/SOURCE_POLICY.md", "docs/SOURCE_REVIEW_CHECKLIST.md",
  "docs/INSTRUCTOR_PILOT_GUIDE.md", "docs/ACCESSIBILITY.md", "docs/PRIVACY_MODEL.md",
  "scripts/validate-site.mjs", ".github/workflows/pages.yml",
  "README.md", "QUICKSTART.md", "CONTRIBUTING.md", "CODE_OF_CONDUCT.md", "ROADMAP.md",
  "SUPABASE-SETUP.md", "DEPLOYMENT.md", "BRANDING-NOTICE.md", "LICENSE.md"
];

async function checkRequiredFiles() {
  for (const f of REQUIRED_FILES) {
    if (await exists(f)) pass(`Required file exists: ${f}`);
    else fail(`Missing required file: ${f}`);
  }
}

const HTML_FILES = [
  "index.html", "foundations.html", "wealth-quest.html", "journey.html", "achievements.html",
  "profile.html", "sources.html", "instructor-guide.html", "privacy.html", "disclaimer.html",
  "auth-callback.html", "onboarding.html"
];

async function checkInternalLinksAndExternalRel() {
  for (const file of HTML_FILES) {
    if (!(await exists(file))) continue;
    const fullHtml = await readFile(path.join(ROOT, file), "utf8");
    const html = fullHtml.replace(/<script[\s\S]*?<\/script>/g, "");

    const hrefRegex = /href="([^"]+)"/g;
    let match;
    while ((match = hrefRegex.exec(html))) {
      const href = match[1];
      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
        if (href.startsWith("http://")) warn(`${file}: non-HTTPS external link ${href}`);
        continue;
      }
      if (href.startsWith("#")) continue;
      const targetPath = href.split("#")[0].split("?")[0];
      if (!targetPath) continue;
      if (!(await exists(targetPath))) {
        fail(`${file}: internal link target does not resolve: ${href}`);
      }
    }

    const targetBlankRegex = /<a\b[^>]*target="_blank"[^>]*>/g;
    let blankMatch;
    while ((blankMatch = targetBlankRegex.exec(html))) {
      const tag = blankMatch[0];
      if (!/rel="[^"]*noopener/.test(tag)) {
        fail(`${file}: target="_blank" link missing rel="noopener": ${tag.slice(0, 80)}`);
      }
    }
    pass(`Checked internal links and external-link rel attributes in ${file}`);
  }
}

async function checkProhibitedProviderNames() {
  // Checks for actual usage (API endpoints / SDK package names), not the
  // guard-list of blocked words that llm/llm-provider.js legitimately
  // contains in order to reject them.
  const filesToScan = ["llm/llm-provider.js", "llm/webllm-provider.js", "llm/ollama-provider.js", "assets/supabase-config.example.js"];
  const prohibitedUsage = /(api\.openai\.com|api\.anthropic\.com|generativelanguage\.googleapis\.com|@anthropic-ai\/sdk|["']openai["']\s*:|from\s+["']openai["'])/i;
  for (const f of filesToScan) {
    if (!(await exists(f))) continue;
    const content = await readFile(path.join(ROOT, f), "utf8");
    if (prohibitedUsage.test(content)) {
      fail(`${f}: appears to call a prohibited proprietary LLM provider`);
    }
  }
  pass("No prohibited proprietary LLM provider usage found in application configuration");
}

async function checkNoServiceRoleKey() {
  const configExample = await exists("assets/supabase-config.js");
  if (configExample) {
    const content = await readFile(path.join(ROOT, "assets/supabase-config.js"), "utf8");
    if (/service_role/i.test(content) || /eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.*service/i.test(content)) {
      fail("assets/supabase-config.js appears to contain a service-role key");
    } else {
      pass("assets/supabase-config.js does not appear to contain a service-role key");
    }
  } else {
    pass("No assets/supabase-config.js committed (guest-mode-only deployment, or key added locally by operator)");
  }
}

async function checkNoAsuLogoAssets() {
  const suspiciousNames = ["asu-logo", "asu-seal", "mascot", "ram-mascot"];
  try {
    const { readdir } = await import("node:fs/promises");
    const assetFiles = await readdir(path.join(ROOT, "assets"));
    const found = assetFiles.filter((f) => suspiciousNames.some((s) => f.toLowerCase().includes(s)));
    if (found.length) fail(`Found possible official-logo asset files: ${found.join(", ")}`);
    else pass("No official Angelo State logo/seal/mascot asset files found");
  } catch {
    pass("assets directory scan skipped (not found)");
  }
}

function checkNode(id, node, achievementIds, isFinal) {
  if (!node.learningObjectives || node.learningObjectives.length === 0) {
    fail(`${id}: missing learning objectives`);
  }
  if (!node.openingNarrative || !node.title || !node.subtitle) {
    fail(`${id}: empty placeholder content detected (missing title/subtitle/narrative)`);
  }
  if (!node.scenario?.prompt) {
    fail(`${id}: missing scenario prompt`);
  }
  const choices = node.choices || [];
  if (choices.length < 2) {
    fail(`${id}: needs at least two usable choices, found ${choices.length}`);
  }
  for (const choice of choices) {
    const hasImmediate = Boolean(node.immediateConsequences?.[choice.id]);
    const hasOneYear = Boolean(node.oneYearConsequences?.[choice.id]);
    const hasLongTerm = Boolean(node.longTermConsequences?.[choice.id]);
    if (!hasImmediate || !hasOneYear || !hasLongTerm) {
      fail(`${id}: choice "${choice.id}" is missing immediate, one-year, or long-term consequence text`);
    }
    if (!choice.whatCouldChangeThisOutcome) {
      fail(`${id}: choice "${choice.id}" is missing recovery/change guidance (whatCouldChangeThisOutcome)`);
    }
  }
  if (!node.recoveryPath) {
    fail(`${id}: missing overall recoveryPath guidance`);
  }
  const knowledgeChecks = node.knowledgeChecks || [];
  if (knowledgeChecks.length === 0) {
    fail(`${id}: no knowledge check present`);
  }
  for (const kc of knowledgeChecks) {
    if (!kc.id) fail(`${id}: a knowledge check is missing an id`);
    if (!kc.options || kc.options.length < 2) fail(`${id}: knowledge check "${kc.id}" needs at least two options`);
    if (!kc.correctAnswer || !kc.explanation) {
      fail(`${id}: knowledge check "${kc.id}" missing answer or explanation`);
    }
    if (kc.options && kc.correctAnswer && !kc.options.includes(kc.correctAnswer)) {
      fail(`${id}: knowledge check "${kc.id}" correctAnswer does not match any option`);
    }
  }
  if (node.achievementId && !achievementIds.has(node.achievementId)) {
    fail(`${id}: references unknown achievement id "${node.achievementId}"`);
  }
  if (!isFinal && !node.unlocks) {
    fail(`${id}: missing unlock target (not the final item in its path)`);
  }
}

async function checkCurriculum() {
  const { FOUNDATIONS_EPISODES } = await import(path.join(ROOT, "data/foundations-story.js"));
  const { WEALTH_QUESTS } = await import(path.join(ROOT, "data/wealth-quests.js"));
  const { SOURCE_REGISTRY } = await import(path.join(ROOT, "data/source-registry.js"));
  const { ACHIEVEMENTS } = await import(path.join(ROOT, "data/achievements.js"));

  const validSourceIds = new Set(SOURCE_REGISTRY.map((s) => s.id));
  const achievementIds = new Set(ACHIEVEMENTS.map((a) => a.id));

  if (FOUNDATIONS_EPISODES.length === 20) pass("All 20 foundation episodes exist");
  else fail(`Expected 20 foundation episodes, found ${FOUNDATIONS_EPISODES.length}`);

  if (WEALTH_QUESTS.length === 20) pass("All 20 wealth quests exist");
  else fail(`Expected 20 wealth quests, found ${WEALTH_QUESTS.length}`);

  const epIds = new Set();
  for (const ep of FOUNDATIONS_EPISODES) {
    if (epIds.has(ep.id)) fail(`Duplicate episode id: ${ep.id}`);
    epIds.add(ep.id);
    checkNode(ep.id, ep, achievementIds, ep.id === "ep20");
    for (const sid of ep.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`${ep.id}: references unknown source id "${sid}"`);
    }
  }
  pass(`Checked ${epIds.size} unique foundation episode IDs`);

  const qIds = new Set();
  for (const q of WEALTH_QUESTS) {
    if (qIds.has(q.id)) fail(`Duplicate quest id: ${q.id}`);
    qIds.add(q.id);
    checkNode(q.id, q, achievementIds, q.id === "q20");
    for (const sid of q.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`${q.id}: references unknown source id "${sid}"`);
    }
  }
  pass(`Checked ${qIds.size} unique wealth quest IDs`);

  // Episode 5 was the specific reported completion failure — verify its
  // full shape explicitly so a regression is caught immediately.
  const ep05 = FOUNDATIONS_EPISODES.find((e) => e.id === "ep05");
  if (!ep05) {
    fail("ep05: episode is missing entirely");
  } else {
    if (!ep05.payoffComparisonExample?.scenarios?.length) fail("ep05: payoffComparisonExample.scenarios is missing or empty");
    if (ep05.unlocks !== "ep06") fail("ep05: does not unlock ep06");
    pass("ep05 (the previously broken episode) has a complete, well-shaped data record");
  }
}

async function checkTemplateTokensAndBannedLanguage() {
  const filesToScan = [
    "data/foundations-episodes-part1.js", "data/foundations-episodes-part2.js",
    "data/wealth-quests-part1.js", "data/wealth-quests-part2.js", "data/story-fragments.js"
  ];
  const bannedPatterns = [
    { re: /composite\s+(student|household|entrepreneur|athlete|creator|millionaire|business|professional|founder|graduate|family|owner|employer|company|donor|industry)/i, label: "banned \"composite X\" phrasing" },
    { re: /\[name\]/i, label: "unresolved [name] placeholder" },
    { re: /<name>/i, label: "unresolved <name> placeholder" },
    { re: /PLACEHOLDER/, label: "literal PLACEHOLDER token" },
    { re: /content coming soon/i, label: "\"content coming soon\" stub text" }
  ];
  for (const rel of filesToScan) {
    if (!(await exists(rel))) continue;
    const content = await readFile(path.join(ROOT, rel), "utf8");
    for (const { re, label } of bannedPatterns) {
      if (re.test(content)) fail(`${rel}: contains ${label}`);
    }
  }
  pass("Scanned curriculum data for unresolved placeholders and banned \"composite\" language");
}

async function checkVisualizations() {
  const { EPISODE_VISUALIZATIONS, QUEST_VISUALIZATIONS } = await import(path.join(ROOT, "data/visualizations.js"));
  const { SOURCE_REGISTRY } = await import(path.join(ROOT, "data/source-registry.js"));
  const { FOUNDATIONS_EPISODES } = await import(path.join(ROOT, "data/foundations-story.js"));
  const { WEALTH_QUESTS } = await import(path.join(ROOT, "data/wealth-quests.js"));
  const validSourceIds = new Set(SOURCE_REGISTRY.map((s) => s.id));

  for (const ep of FOUNDATIONS_EPISODES) {
    if (!EPISODE_VISUALIZATIONS[ep.id]) fail(`${ep.id}: no visualization defined`);
  }
  for (const q of WEALTH_QUESTS) {
    if (!QUEST_VISUALIZATIONS[q.id]) fail(`${q.id}: no visualization defined`);
  }

  for (const [key, viz] of [...Object.entries(EPISODE_VISUALIZATIONS), ...Object.entries(QUEST_VISUALIZATIONS)]) {
    if (!viz.data || viz.data.length === 0) fail(`visualization ${key}: missing data`);
    if (!viz.assumptions || viz.assumptions.length === 0) fail(`visualization ${key}: missing assumptions`);
    if (!viz.accessibilitySummary) fail(`visualization ${key}: missing accessibilitySummary`);
    if (!viz.sourceIds || viz.sourceIds.length === 0) fail(`visualization ${key}: missing sourceIds`);
    if (!viz.reviewedDate) fail(`visualization ${key}: missing reviewedDate`);
    for (const sid of viz.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`visualization ${key}: references unknown source id "${sid}"`);
    }
  }
  pass(`Checked visualizations for all ${FOUNDATIONS_EPISODES.length} episodes and ${WEALTH_QUESTS.length} quests`);
}

async function checkCalculators() {
  const { CALCULATOR_META } = await import(path.join(ROOT, "data/calculator-assumptions.js"));
  const { SOURCE_REGISTRY } = await import(path.join(ROOT, "data/source-registry.js"));
  const validSourceIds = new Set(SOURCE_REGISTRY.map((s) => s.id));
  for (const [key, meta] of Object.entries(CALCULATOR_META)) {
    if (!meta.formula) fail(`calculator ${key}: missing formula/method description`);
    if (!meta.sourceIds || meta.sourceIds.length === 0) fail(`calculator ${key}: missing sourceIds`);
    for (const sid of meta.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`calculator ${key}: references unknown source id "${sid}"`);
    }
  }
  pass(`Checked ${Object.keys(CALCULATOR_META).length} calculator definitions for formula and sources`);
}

async function checkKnownBugFixes() {
  const foundations = await readFile(path.join(ROOT, "foundations.html"), "utf8");
  const questHtml = await readFile(path.join(ROOT, "wealth-quest.html"), "utf8");
  const onboarding = await readFile(path.join(ROOT, "onboarding.html"), "utf8");

  if (/id="consequence-panel"/.test(foundations) || /id="quest-consequence-panel"/.test(questHtml)) {
    fail("A single shared consequence panel id was found — choice results must render per-card (see assets/choice-cards.js)");
  } else {
    pass("No shared global consequence-panel element found — choice results render per card");
  }

  if (!/choice-cards\.js/.test(foundations) || !/choice-cards\.js/.test(questHtml)) {
    fail("foundations.html or wealth-quest.html does not import the shared per-card choice renderer");
  } else {
    pass("Both foundations.html and wealth-quest.html use the shared per-card choice renderer");
  }

  if (!/nextBtn\.disabled = isLast/.test(onboarding) || !/aria-disabled/.test(onboarding)) {
    fail("onboarding.html Step 8 Next-button disabled-state logic appears to be missing");
  } else {
    pass("onboarding.html keeps the Step 8 Next button visible-but-disabled with aria-disabled");
  }
}

async function main() {
  console.log("Running Ram Ready Financial Futures site validation...\n");
  await checkRequiredFiles();
  await checkInternalLinksAndExternalRel();
  await checkProhibitedProviderNames();
  await checkNoServiceRoleKey();
  await checkNoAsuLogoAssets();
  await checkCurriculum();
  await checkTemplateTokensAndBannedLanguage();
  await checkVisualizations();
  await checkCalculators();
  await checkKnownBugFixes();

  console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} failure(s), ${warnings} warning(s).`);
  if (failures > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
