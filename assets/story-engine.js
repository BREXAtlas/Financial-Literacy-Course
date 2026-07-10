// Ram Ready Financial Futures — Financial Foundations Story Engine
//
// Renders the 20-episode continuous storyline from structured data
// (data/foundations-story.js) and tracks simplified educational simulation
// variables. These variables are a teaching simplification, not a real
// financial-planning model, and no setback is ever an irreversible dead end.

import { FOUNDATIONS_EPISODES, FOUNDATIONS_ACTS } from "../data/foundations-story.js";
import { getSourcesByIds } from "../data/source-registry.js";
import { personalizeSlot } from "./personalization-engine.js";
import { recordChoice, setStars, unlockAchievement, loadState } from "./profile-engine.js";

export const INITIAL_SIM_STATE = {
  cashOnHand: 400,
  monthlyCashFlow: 0,
  emergencyFundMonths: 0,
  debtBalance: 0,
  debtCost: 0,
  creditHealth: 50,
  taxReserve: 0,
  retirementAssets: 0,
  taxableInvestments: 0,
  businessAssets: 0,
  liquidAssets: 400,
  totalAssets: 400,
  totalLiabilities: 0,
  netWorth: 400,
  insuranceCoverage: 0,
  riskExposure: 20,
  financialKnowledge: 0,
  wellbeing: 60,
  integrity: 60,
  flexibility: 60
};

export function getEpisode(id) {
  return FOUNDATIONS_EPISODES.find((e) => e.id === id) || null;
}

export function getEpisodesForAct(act) {
  return FOUNDATIONS_EPISODES.filter((e) => e.act === act);
}

export function getActs() {
  return FOUNDATIONS_ACTS;
}

export function getNextEpisodeId(id) {
  const ep = getEpisode(id);
  return ep ? ep.unlocks : null;
}

export function isEpisodeUnlocked(id, completedNodeIds) {
  if (id === "ep01") return true;
  const index = FOUNDATIONS_EPISODES.findIndex((e) => e.id === id);
  if (index <= 0) return true;
  const prev = FOUNDATIONS_EPISODES[index - 1];
  return completedNodeIds.includes(prev.id);
}

export function applyChoiceEffect(simState, effect = {}) {
  const next = { ...simState };
  for (const [key, delta] of Object.entries(effect)) {
    if (typeof next[key] === "number") {
      next[key] = next[key] + delta;
    }
  }
  next.liquidAssets = Math.max(0, next.cashOnHand) + Math.max(0, next.taxableInvestments);
  next.totalAssets =
    Math.max(0, next.cashOnHand) +
    Math.max(0, next.retirementAssets) +
    Math.max(0, next.taxableInvestments) +
    Math.max(0, next.businessAssets);
  next.totalLiabilities = Math.max(0, next.debtBalance);
  next.netWorth = next.totalAssets - next.totalLiabilities;
  next.financialKnowledge = Math.min(100, Math.max(0, next.financialKnowledge));
  next.wellbeing = Math.min(100, Math.max(0, next.wellbeing));
  next.integrity = Math.min(100, Math.max(0, next.integrity));
  next.flexibility = Math.min(100, Math.max(0, next.flexibility));
  next.creditHealth = Math.min(100, Math.max(0, next.creditHealth));
  return next;
}

export async function renderEpisodeNarrative(episode, profile, useGenericStory) {
  const opening = await personalizeSlot({
    slot: episode.personalizationSlots?.[0] || null,
    baseText: episode.openingNarrative,
    profile,
    useGenericStory
  });
  return opening;
}

export function getSourcesForEpisode(episode) {
  return getSourcesByIds(episode.sourceIds || []);
}

export function submitChoice(episodeId, choiceId) {
  return recordChoice("foundations", episodeId, choiceId);
}

export function computeStars(episode, { scenarioComplete, knowledgeCheckPassed }) {
  let stars = 0;
  if (scenarioComplete) stars += 1; // Discover
  if (scenarioComplete) stars += 1; // Decide
  if (knowledgeCheckPassed) stars += 1; // Explain
  return stars;
}

export function completeEpisode(episode, { stars }) {
  setStars("foundations", episode.id, stars);
  if (stars >= 3 && episode.achievementId) {
    unlockAchievement(episode.achievementId);
  }
  return loadState();
}

export function isActComplete(act, completedNodeIds) {
  return getEpisodesForAct(act).every((e) => completedNodeIds.includes(e.id));
}
