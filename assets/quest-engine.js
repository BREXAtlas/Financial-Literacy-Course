// Ram Ready Financial Futures — Future Wealth Quest Engine
//
// Mirrors story-engine.js for the advanced, optional Wealth Quest path.
// Quest tiers describe wealth SYSTEMS to understand, never a ranking of
// people's worth. Unlocks are based on learning progress, not simulated
// money.

import { WEALTH_QUESTS, WEALTH_TIERS } from "../data/wealth-quests.js";
import { getSourcesByIds } from "../data/source-registry.js";
import { personalizeSlot } from "./personalization-engine.js";
import { recordChoice, setStars, unlockAchievement, loadState } from "./profile-engine.js";

export function getQuest(id) {
  return WEALTH_QUESTS.find((q) => q.id === id) || null;
}

export function getQuestsForTier(tier) {
  return WEALTH_QUESTS.filter((q) => q.tier === tier);
}

export function getTiers() {
  return WEALTH_TIERS;
}

export function isQuestUnlocked(id, completedNodeIds) {
  if (id === "q01") return true;
  const index = WEALTH_QUESTS.findIndex((q) => q.id === id);
  if (index <= 0) return true;
  const prev = WEALTH_QUESTS[index - 1];
  return completedNodeIds.includes(prev.id);
}

export async function renderQuestNarrative(quest, profile, useGenericStory) {
  return personalizeSlot({
    slot: quest.personalizationSlots?.[0] || null,
    baseText: quest.openingNarrative,
    profile,
    useGenericStory
  });
}

export function getSourcesForQuest(quest) {
  return getSourcesByIds(quest.sourceIds || []);
}

export function submitChoice(questId, choiceId) {
  return recordChoice("wealth-quest", questId, choiceId);
}

export function computeStars({ scenarioComplete, knowledgeCheckPassed }) {
  let stars = 0;
  if (scenarioComplete) stars += 1;
  if (scenarioComplete) stars += 1;
  if (knowledgeCheckPassed) stars += 1;
  return stars;
}

export function completeQuest(quest, { stars }) {
  setStars("wealth-quest", quest.id, stars);
  if (stars >= 3 && quest.achievementId) {
    unlockAchievement(quest.achievementId);
  }
  return loadState();
}

export function isTierComplete(tier, completedNodeIds) {
  return getQuestsForTier(tier).every((q) => completedNodeIds.includes(q.id));
}

export function scoreBoardroomSimulation(selections, dimensions) {
  // selections: array of {dimensionKey, score(0-3)} — used only by q20.
  const scores = {};
  for (const dim of dimensions) {
    const found = selections.find((s) => s.dimensionKey === dim.key);
    scores[dim.key] = found ? found.score : 0;
  }
  return scores;
}
