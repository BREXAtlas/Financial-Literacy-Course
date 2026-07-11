# Source Review Checklist

Run through this list at least once per academic term, or whenever a "Source Correction" issue is filed.

1. Open every URL in `data/source-registry.js`. Confirm it resolves (no 404s, no redirects to unrelated pages).
2. For any source marked with volatility notes (tax rates, contribution limits, exclusions, interest rates),
   confirm the illustrative figures referenced anywhere in the curriculum still make sense as *illustrative*
   examples — update the `reviewed` date once confirmed.
3. If a URL is broken, replace it with the current official equivalent for the same agency/topic — never link
   to a non-authoritative mirror.
4. Confirm no source has been quoted at length — summaries only.
5. Confirm every episode/quest `sourceIds` array still resolves to entries in the registry (the validator
   script checks this automatically — run `node scripts/validate-site.mjs`).
6. Confirm every visualization in `data/visualizations.js` and every calculator in
   `data/calculator-assumptions.js` still has valid `sourceIds`, current assumptions, and an up-to-date
   `reviewedDate`/`reviewed` field (also validator-checked).
7. Update this file's own last-reviewed note below.

**Last full review:** 2026-07-10
