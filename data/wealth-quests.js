// Ram Ready Financial Futures — Future Wealth Quest (combined)
// Combines quests 1-10 and 11-20 into the full 20-quest advanced path.
// Curriculum content lives in wealth-quests-part1.js and part2.js;
// this file is the single import point used by the quest engine.

import { QUESTS_PART1 } from "./wealth-quests-part1.js";
import { QUESTS_PART2 } from "./wealth-quests-part2.js";

export const WEALTH_QUESTS = [...QUESTS_PART1, ...QUESTS_PART2];

export const WEALTH_TIERS = [
  { number: 1, title: "Approximately $1 Million to $20 Million", questIds: ["q01", "q02", "q03", "q04", "q05"] },
  { number: 2, title: "Approximately $20 Million to $100 Million", questIds: ["q06", "q07", "q08", "q09", "q10"] },
  { number: 3, title: "Approximately $100 Million to $1 Billion", questIds: ["q11", "q12", "q13", "q14", "q15"] },
  { number: 4, title: "$1 Billion and Multi-Billion-Dollar Systems", questIds: ["q16", "q17", "q18", "q19", "q20"] }
];

export const TIER_DISCLAIMER =
  "These tiers describe wealth-management systems, not a ranking of human worth. A person's value is never measured by net worth.";

export function getQuestById(id) {
  return WEALTH_QUESTS.find((q) => q.id === id) || null;
}

export function getNextQuestId(id) {
  const q = getQuestById(id);
  return q ? q.unlocks : null;
}

export function getTierForQuest(id) {
  return WEALTH_TIERS.find((t) => t.questIds.includes(id)) || null;
}
