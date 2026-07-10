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
  "assets/game-engine.js", "assets/calculator-engine.js", "assets/source-renderer.js",
  "assets/accessibility.js", "assets/certificate.js", "assets/auth-sync.js",
  "assets/course-cloud-bridge.js", "assets/supabase-config.example.js",
  "data/onboarding-options.js", "data/source-registry.js", "data/foundations-story.js",
  "data/wealth-quests.js", "data/story-fragments.js", "data/achievements.js",
  "data/calculator-assumptions.js", "data/glossary.js",
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

async function checkCurriculum() {
  const { FOUNDATIONS_EPISODES } = await import(path.join(ROOT, "data/foundations-story.js"));
  const { WEALTH_QUESTS } = await import(path.join(ROOT, "data/wealth-quests.js"));
  const { SOURCE_REGISTRY } = await import(path.join(ROOT, "data/source-registry.js"));

  const validSourceIds = new Set(SOURCE_REGISTRY.map((s) => s.id));

  if (FOUNDATIONS_EPISODES.length === 20) pass("All 20 foundation episodes exist");
  else fail(`Expected 20 foundation episodes, found ${FOUNDATIONS_EPISODES.length}`);

  if (WEALTH_QUESTS.length === 20) pass("All 20 wealth quests exist");
  else fail(`Expected 20 wealth quests, found ${WEALTH_QUESTS.length}`);

  const epIds = new Set();
  for (const ep of FOUNDATIONS_EPISODES) {
    if (epIds.has(ep.id)) fail(`Duplicate episode id: ${ep.id}`);
    epIds.add(ep.id);

    if (!ep.learningObjectives || ep.learningObjectives.length === 0) {
      fail(`${ep.id}: missing learning objectives`);
    }
    if (!ep.openingNarrative || !ep.title || !ep.subtitle) {
      fail(`${ep.id}: empty placeholder content detected (missing title/subtitle/narrative)`);
    }
    for (const choice of ep.choices || []) {
      const hasConsequence =
        ep.immediateConsequences?.[choice.id] || ep.oneYearConsequences?.[choice.id] || ep.longTermConsequences?.[choice.id];
      if (!hasConsequence) fail(`${ep.id}: choice "${choice.id}" has no consequence text`);
    }
    for (const kc of ep.knowledgeChecks || []) {
      if (!kc.correctAnswer || !kc.explanation) {
        fail(`${ep.id}: knowledge check "${kc.id}" missing answer or explanation`);
      }
    }
    for (const sid of ep.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`${ep.id}: references unknown source id "${sid}"`);
    }
  }
  pass(`Checked ${epIds.size} unique foundation episode IDs`);

  const qIds = new Set();
  for (const q of WEALTH_QUESTS) {
    if (qIds.has(q.id)) fail(`Duplicate quest id: ${q.id}`);
    qIds.add(q.id);

    if (!q.learningObjectives || q.learningObjectives.length === 0) {
      fail(`${q.id}: missing learning objectives`);
    }
    if (!q.openingNarrative || !q.title || !q.subtitle) {
      fail(`${q.id}: empty placeholder content detected (missing title/subtitle/narrative)`);
    }
    for (const choice of q.choices || []) {
      const hasConsequence =
        q.immediateConsequences?.[choice.id] || q.oneYearConsequences?.[choice.id] || q.longTermConsequences?.[choice.id];
      if (!hasConsequence) fail(`${q.id}: choice "${choice.id}" has no consequence text`);
    }
    for (const kc of q.knowledgeChecks || []) {
      if (!kc.correctAnswer || !kc.explanation) {
        fail(`${q.id}: knowledge check "${kc.id}" missing answer or explanation`);
      }
    }
    for (const sid of q.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`${q.id}: references unknown source id "${sid}"`);
    }
  }
  pass(`Checked ${qIds.size} unique wealth quest IDs`);
}

async function main() {
  console.log("Running Ram Ready Financial Futures site validation...\n");
  await checkRequiredFiles();
  await checkInternalLinksAndExternalRel();
  await checkProhibitedProviderNames();
  await checkNoServiceRoleKey();
  await checkNoAsuLogoAssets();
  await checkCurriculum();

  console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} failure(s), ${warnings} warning(s).`);
  if (failures > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
