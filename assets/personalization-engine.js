// Ram Ready Financial Futures — Personalization Engine
//
// Bounded personalization only: selects an approved, prewritten fragment for
// a narrative slot based on profile tags, then (optionally, with consent)
// asks an open-source local model to smooth the join. The deterministic
// template path always works with no model at all. See
// docs/PERSONALIZATION_MODEL.md.

import { selectFragment } from "../data/story-fragments.js";
import { personalize } from "../llm/llm-provider.js";
import { getProfileTags } from "./profile-engine.js";

export async function personalizeSlot({ slot, baseText, profile, useGenericStory }) {
  if (!slot || useGenericStory) {
    return resolveTokens(baseText, profile);
  }
  const tags = getProfileTags(profile);
  const fragment = selectFragment(slot, tags);
  const fragmentText = fragment ? fragment.text : "";

  if (profile.aiPersonalizationEnabled && profile.aiProvider !== "template") {
    try {
      return await personalize({
        baseText,
        fragmentText,
        profile,
        providerId: profile.aiProvider,
        providerConfig: profile.aiProviderConfig || {}
      });
    } catch {
      // fall through to deterministic path
    }
  }

  const joined = [baseText, fragmentText].filter(Boolean).join(" ");
  return resolveTokens(joined, profile);
}

// Irregular third-person-singular verb forms observed in the curriculum data,
// mapped to their base (second-person "you") form. See docs/PERSONALIZATION_MODEL.md.
const IRREGULAR_VERBS = {
  has: "have", "hasn't": "haven't",
  is: "are", "isn't": "aren't",
  does: "do", "doesn't": "don't",
  was: "were", goes: "go"
};

// De-conjugates a verb written for a third-person-singular subject (e.g. the
// learner's name) into the base form used with the second-person "you"
// (e.g. "gets" -> "get", "has" -> "have"). Modal verbs (may/can/must/would/
// could/should/might) and past-tense forms are unaffected because they do
// not end in a bare "s".
function deconjugate(word) {
  const lower = word.toLowerCase();
  if (Object.prototype.hasOwnProperty.call(IRREGULAR_VERBS, lower)) return IRREGULAR_VERBS[lower];
  if (/^[a-z]+s$/.test(lower) && lower.length > 1) {
    if (/(ches|shes|xes|zzes|sses)$/.test(lower)) return lower.slice(0, -2);
    if (/ies$/.test(lower)) return lower.slice(0, -3) + "y";
    return lower.slice(0, -1);
  }
  return word;
}

// Resolves {{name}}, {{subject}}, {{object}}, and {{possessive}} tokens into
// grammatical text. When a learner name exists, names/pronouns are inserted
// directly (verbs in the source text are already written in third-person
// singular). When no name exists, the sentence is rewritten in natural
// second person ("you"/"your") rather than mechanically substituting "you"
// into a third-person sentence — see docs/PERSONALIZATION_MODEL.md.
export function resolveTokens(text, profile) {
  const hasName = Boolean(profile?.displayName);
  const name = profile?.displayName || "";
  let result = text || "";

  // Possessive name usage ("{{name}}'s first paycheck...") resolves to the
  // learner's name possessive, or "your" in second person.
  result = result.replace(/\{\{name\}\}'s/g, hasName ? `${name}'s` : "your");

  // {{name}} as the grammatical subject, immediately followed by a verb:
  // keep the verb as-written for a name, or de-conjugate it for "you".
  result = result.replace(/\{\{name\}\}(\s+)([A-Za-z']+)/g, (match, space, word) =>
    hasName ? `${name}${space}${word}` : `you${space}${deconjugate(word)}`);

  // Any remaining {{name}} (used as an object elsewhere in the sentence).
  result = result.replaceAll("{{name}}", hasName ? name : "you");

  const pronouns = hasName
    ? (profile?.pronouns || { subject: "they", object: "them", possessive: "their" })
    : { subject: "you", object: "you", possessive: "your" };

  result = result.replace(/\{\{subject\}\}(\s+)([A-Za-z']+)/g, (match, space, word) =>
    hasName ? `${pronouns.subject}${space}${word}` : `you${space}${deconjugate(word)}`);
  result = result.replaceAll("{{subject}}", pronouns.subject);
  result = result.replaceAll("{{object}}", pronouns.object);
  result = result.replaceAll("{{possessive}}", pronouns.possessive);

  // Capitalize "you"/"your" at the start of the string or after sentence-
  // ending punctuation, since the substitutions above are always lowercase.
  result = result.replace(/(^|[.!?]\s+)(you\b|your\b)/g, (m, pre, word) => pre + word.charAt(0).toUpperCase() + word.slice(1));

  return result;
}

export function describePersonalizationForPreview(profile) {
  const tags = getProfileTags(profile);
  return {
    willAdapt: tags.length > 0
      ? `Story details will reflect: ${tags.join(", ")}.`
      : "No preferences selected — the standard story will be used.",
    staysStandard: "All financial facts, numbers, quiz answers, and consequences are identical for every learner regardless of selections."
  };
}
