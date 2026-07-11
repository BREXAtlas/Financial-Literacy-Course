# Personalization Model

## Bounded personalization

The full curriculum is prewritten and reviewed — nothing is generated from scratch. Personalization works by
selecting an **approved story fragment** for a given narrative slot based on the learner's profile tags. See
`data/story-fragments.js` for the full fragment list and `assets/personalization-engine.js` for selection logic.

Selection order: the engine checks the learner's profile tags (values, interests, career direction, life
vision, financial goal — in that priority order) against fragments registered for the slot, and falls back to
the `generic` fragment when no tag matches or the learner chose the fully generic story.

## What personalization can change

- Character presentation, name, pronouns, avatar styling (see `data/onboarding-options.js`)
- Which prewritten narrative detail/analogy appears at specific "personalization slots"
- Light transition phrasing (optional, local-model only — see `docs/OPEN_SOURCE_AI.md`)

## What personalization can never change

- Financial facts, tax rules, legal claims, or citations
- Investment returns or calculator results
- Quiz questions or correct answers
- Simulated consequences or dollar effects
- Learning objectives

## Gender parity

The same underlying storyline and data objects are used regardless of the "man" or "woman" presentation choice.
Presentation only maps to pronouns and avatar styling via `PRONOUNS_BY_PRESENTATION` in
`assets/profile-engine.js` — pay, career opportunity, quiz difficulty, and consequences never vary by
presentation. The presentation list is intentionally extensible (see `CHARACTER_PRESENTATIONS` in
`data/onboarding-options.js`) so another option could be added without rewriting any curriculum data.

## Personalization node map

Foundation slots: episodes 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20.
Wealth Quest slots: quests 2, 3, 4, 6, 10, 15, 19, 20.
All other episodes/quests render the standard, non-personalized narrative for every learner.

## Grammatical token resolution

Curriculum text uses `{{name}}`, `{{name}}'s`, `{{subject}}`, `{{object}}`, and `{{possessive}}` tokens.
`resolveTokens()` in `assets/personalization-engine.js` resolves them:

- **A display name exists:** tokens resolve directly to the name/pronoun as written (`{{name}} gets a card` →
  `Jordan gets a card`).
- **No display name:** the sentence is rewritten in natural second person, not a mechanical substitution. The verb
  immediately following `{{name}}`/`{{subject}}` is de-conjugated to its base form (`gets` → `get`, `has` →
  `have`, `is` → `are`) and `{{name}}'s` resolves to `your`, so the result reads "You get a card" and "Your first
  paycheck arrives Friday" rather than "You gets a card" or "You's first paycheck." A small irregular-verb map
  and a sibilant-ending rule (`researches` → `research`) handle exceptions; see the `deconjugate()` function.

**Known limitation:** the de-conjugation only covers the single verb directly bound to the token. A compound
predicate sharing the same implied subject later in the sentence (e.g., "{{name}} gets an offer... and has to
decide") is not re-walked, so a second verb far from the token can still render in third-person form when no name
is set. This is a residual edge case, not the reported "You gets/You's" bug, which is fixed. Every place curriculum
text is displayed (narrative, scenario prompt, choice text, consequences, knowledge checks) now routes through
`resolveTokens()` — previously the scenario prompt and consequence panels rendered raw, unresolved text.
