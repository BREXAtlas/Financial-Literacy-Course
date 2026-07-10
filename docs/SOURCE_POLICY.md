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

## Neutrality

No source or fact may be framed to favor a specific financial product, institution, or provider. Comparisons
(debt avalanche vs. snowball, renting vs. buying, DIY vs. professional advice, etc.) always present tradeoffs,
never a universal winner.
