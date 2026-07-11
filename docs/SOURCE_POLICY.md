# Source Policy

## Principles

- Prefer authoritative, primary sources (government regulators, official agencies) over secondary explainers.
- Never copy large copyrighted passages — summarize and link.
- Every episode and quest references source IDs from `data/source-registry.js`; nothing is asserted as fact
  without a traceable source.
- Facts that change frequently (tax brackets, contribution limits, estate/gift exclusions, interest rates,
  deposit-insurance rules, student-loan programs, state filing fees) are always labeled "illustrative," dated,
  and linked to the current official source — never hard-coded as a timeless fact.
- All external links open in a new tab with `rel="noopener noreferrer"` and use HTTPS.

## Registry structure

Each source has: `id`, `title`, `org`, `url`, `topic`, `concepts`, `classification` (`primary`/`secondary`),
`reviewed` (date), and optional `notes` about volatility. See `data/source-registry.js`.

## Visualizations and calculators

Every entry in `data/visualizations.js` and every calculator in `data/calculator-assumptions.js` /
`assets/calculator-engine.js` must carry `sourceIds` resolving to `data/source-registry.js`, a plain-language
`assumptions` list (or `limitations`), and a review date. `scripts/validate-site.mjs` fails the build if any of
these are missing or reference an unknown source id. Added for this pass: `finra-margin` (FINRA's Margin
Accounts explainer, used by the borrowing-against-assets stress test and quest 14's visualization).

## Neutrality

No source or fact may be framed to favor a specific financial product, institution, or provider. Comparisons
(debt avalanche vs. snowball, renting vs. buying, DIY vs. professional advice, etc.) always present tradeoffs,
never a universal winner.
