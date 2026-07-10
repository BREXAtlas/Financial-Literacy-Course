# Story Architecture

## Two paths, one shell

Financial Foundations Story (20 episodes, 4 acts) and Future Wealth Quest (20 quests, 4 tiers) share the same
technical shell: `assets/story-engine.js` / `assets/quest-engine.js`, the same choice/consequence/knowledge-check
interaction pattern, and the same game mechanics (`assets/game-engine.js`).

## Data separation

Curriculum content lives entirely in `data/foundations-story.js` and `data/wealth-quests.js` (each assembled
from two part files) as plain structured objects — never hard-coded into HTML. Rendering logic
(`foundations.html`, `wealth-quest.html`) is generic and would work unchanged if the curriculum data were
replaced.

## Episode/quest object shape

See the top-of-file comments in `data/foundations-episodes-part1.js` and `data/wealth-quests-part1.js` for the
full schema. Key fields: `openingNarrative`, `personalizationSlots`, `scenario`, `choices` (each with
`whyChosen`/`possibleBenefit`/`possibleCost`/`possibleRisk`/`immediateEffect`/`futureEffect`/
`whatCouldChangeThisOutcome`/`sourceIds`), `immediateConsequences` / `oneYearConsequences` /
`longTermConsequences` (narrative text keyed by choice id), `recoveryPath`, `conceptExplanation` (the ten-part
what/why/how/cost/risk/who-benefits framework), `knowledgeChecks`, `sourceIds`, `achievementId`, `unlocks`.

## Simulation variables

A simplified educational simulation state (`INITIAL_SIM_STATE` in `story-engine.js`) tracks variables like
`cashOnHand`, `netWorth`, `debtBalance`, `financialKnowledge`, and `wellbeing`. These are a teaching
simplification, not a real financial-planning model, and are never displayed as if they were individualized
advice.

## No irreversible dead ends

Every episode and quest includes a `recoveryPath` describing how a learner recovers from a setback choice.
Nothing in the simulation can "game over."

## Continuity, not disconnected chapters

Foundations episodes reference the same fictional learner across all 20 nodes; acts are a navigation
convenience (`FOUNDATIONS_ACTS` in `data/foundations-story.js`), not a narrative break.
