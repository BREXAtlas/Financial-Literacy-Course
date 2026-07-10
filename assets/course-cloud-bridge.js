// Ram Ready Financial Futures — Guest-to-Account Sync Bridge
//
// Bridges local guest progress (assets/profile-engine.js) with the optional
// Supabase tables. Only bounded profile tags and simulation ranges are
// stored — never exact balances or sensitive identifiers. Sync is manual
// (learner-triggered), not automatic background sync, per the privacy model.

import { getClient } from "./auth-sync.js";
import { loadState, saveState } from "./profile-engine.js";

export async function pushLocalStateToCloud() {
  const client = await getClient();
  if (!client) throw new Error("Account mode is not configured.");
  const { data: { user } } = await client.auth.getUser();
  if (!user) throw new Error("Not signed in.");

  const state = loadState();
  const p = state.profile;

  await client.from("learner_profiles").upsert({
    user_id: user.id,
    display_name: p.displayName,
    presentation_id: p.presentationId,
    avatar_style: p.avatarStyle,
    values_tags: p.valuesTags,
    interest_tags: p.interestTags,
    career_direction: p.careerDirection,
    life_vision_tags: p.lifeVisionTags,
    financial_goal: p.financialGoal,
    starting_income_range: p.startingIncome,
    starting_savings_range: p.startingSavings,
    starting_debt_range: p.startingDebt,
    ai_personalization_enabled: p.aiPersonalizationEnabled,
    updated_at: new Date().toISOString()
  });

  for (const path of ["foundations", "wealthQuest"]) {
    const progress = state.progress[path];
    await client.from("course_progress").upsert({
      user_id: user.id,
      path: path === "foundations" ? "foundations" : "wealth-quest",
      current_node_id: progress.currentNodeId,
      completed_node_ids: progress.completedNodeIds,
      stars: progress.stars,
      simulator_state: state.simulatorAssumptions || {},
      updated_at: new Date().toISOString()
    });
  }

  for (const achievementId of state.achievements) {
    await client.from("achievements").upsert(
      { user_id: user.id, achievement_id: achievementId },
      { onConflict: "user_id,achievement_id" }
    );
  }

  return true;
}

export async function pullCloudStateToLocal() {
  const client = await getClient();
  if (!client) throw new Error("Account mode is not configured.");
  const { data: { user } } = await client.auth.getUser();
  if (!user) throw new Error("Not signed in.");

  const state = loadState();

  const { data: profileRow } = await client.from("learner_profiles").select("*").eq("user_id", user.id).maybeSingle();
  if (profileRow) {
    state.profile = {
      ...state.profile,
      displayName: profileRow.display_name || state.profile.displayName,
      presentationId: profileRow.presentation_id || state.profile.presentationId,
      avatarStyle: profileRow.avatar_style || state.profile.avatarStyle,
      valuesTags: profileRow.values_tags || [],
      interestTags: profileRow.interest_tags || [],
      careerDirection: profileRow.career_direction,
      lifeVisionTags: profileRow.life_vision_tags || [],
      financialGoal: profileRow.financial_goal,
      startingIncome: profileRow.starting_income_range,
      startingSavings: profileRow.starting_savings_range,
      startingDebt: profileRow.starting_debt_range,
      aiPersonalizationEnabled: profileRow.ai_personalization_enabled
    };
  }

  const { data: progressRows } = await client.from("course_progress").select("*").eq("user_id", user.id);
  for (const row of progressRows || []) {
    const key = row.path === "foundations" ? "foundations" : "wealthQuest";
    state.progress[key] = {
      currentNodeId: row.current_node_id,
      completedNodeIds: row.completed_node_ids || [],
      stars: row.stars || {},
      choices: state.progress[key].choices
    };
  }

  const { data: achievementRows } = await client.from("achievements").select("achievement_id").eq("user_id", user.id);
  state.achievements = Array.from(new Set([...(state.achievements || []), ...(achievementRows || []).map((r) => r.achievement_id)]));

  saveState(state);
  return state;
}

export async function mergeGuestIntoAccount() {
  await pullCloudStateToLocal();
  await pushLocalStateToCloud();
  return loadState();
}
