// Ram Ready Financial Futures — Financial Foundations Story (combined)
// Combines episodes 1-10 and 11-20 into a single 20-episode continuous storyline.
// Curriculum content lives in foundations-episodes-part1.js and part2.js;
// this file is the single import point used by the story engine.

import { EPISODES_PART1 } from "./foundations-episodes-part1.js";
import { EPISODES_PART2 } from "./foundations-episodes-part2.js";

export const FOUNDATIONS_EPISODES = [...EPISODES_PART1, ...EPISODES_PART2];

export const FOUNDATIONS_ACTS = [
  { number: 1, title: "Starting Your Financial Life", episodeIds: ["ep01", "ep02", "ep03", "ep04", "ep05"] },
  { number: 2, title: "Handling Real Life", episodeIds: ["ep06", "ep07", "ep08", "ep09", "ep10"] },
  { number: 3, title: "Building Assets and Options", episodeIds: ["ep11", "ep12", "ep13", "ep14", "ep15", "ep16"] },
  { number: 4, title: "Protecting and Sustaining the Plan", episodeIds: ["ep17", "ep18", "ep19", "ep20"] }
];

export function getEpisodeById(id) {
  return FOUNDATIONS_EPISODES.find((e) => e.id === id) || null;
}

export function getNextEpisodeId(id) {
  const ep = getEpisodeById(id);
  return ep ? ep.unlocks : null;
}

export function getActForEpisode(id) {
  return FOUNDATIONS_ACTS.find((a) => a.episodeIds.includes(id)) || null;
}
