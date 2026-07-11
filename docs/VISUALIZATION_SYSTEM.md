# Visualization System

Every Financial Foundations episode and every Future Wealth quest (40 total) has exactly one structured
visualization tied directly to that lesson's concept. See `data/visualizations.js` for the data and
`assets/visualization-engine.js` for the renderer.

## Why native SVG/CSS instead of a chart library

No external chart library is used or required. Every visualization type is built from plain HTML/CSS (bars,
stacked bars, tables, ordered lists, flex layouts) so the course keeps working with zero build step, zero
external requests, and a small page weight — important on a phone and under the GitHub Pages subpath. A chart
library could be added later, but only as an optional enhancement that degrades gracefully if it fails to load.

## Visualization data shape

```js
{
  id, type, title, description,
  data,               // shape depends on type, see below
  labels,             // axis/unit hints, e.g. { unit: "$", xAxis, yAxis, xLevels, yLevels }
  sourceIds,          // must resolve in data/source-registry.js
  assumptions,        // plain-language list, always shown
  accessibilitySummary, // one sentence, used as both the visible caption and the aria-label
  reviewedDate
}
```

## Supported types

- `bar` — single-series horizontal bars, value printed on each bar.
- `comparison` — grouped bars comparing 2+ named series across categories (e.g., bank vs. credit union vs.
  digital bank).
- `stacked-bar` — one or more stacked bars with named segments (pay-stub waterfalls, ownership dilution,
  contributions vs. growth).
- `timeline` — an ordered list of dated/staged steps (liquidity ladders, career income windows).
- `flow` — an ordered sequence of connected steps (decision flows, business-money-separation flow).
- `matrix` — a 2x2 (or NxM) table plotting items against two categorical axes (risk matrices, stakeholder
  power/interest maps) — the table *is* the visual, so it is inherently screen-reader accessible.

## Accessibility guarantees

Every visualization always renders, in this order: a heading + description, the visual (with
`role="img"` and an `aria-label` accessibility summary), a `<details>`-disclosed data table with the same
numbers, assumptions, an "illustrative estimate, not a forecast" line with the review date, and source chips.
No visualization uses color as the only carrier of meaning — every value is printed as text. Nothing animates,
so `prefers-reduced-motion` requires no special handling.

## Calculators

Interactive calculators (`assets/calculator-widget.js` + `assets/calculator-engine.js`) follow the same
transparency pattern: inputs, a result, a collapsible plain-language "How this is calculated" guide, assumptions,
limitations, sources, and a review date. Wired-in examples: the bank-fee annual-cost calculator (Episode 2), the
debt avalanche-vs-snowball comparison (Episode 5), the transportation total-cost calculator (Episode 7), the
Road-to-$1.5-Million scenario builder (Episode 20), and the borrowing-against-assets margin-call stress test
(Quest 14). `assets/calculator-engine.js` exposes additional calculators (net worth, cash flow, APR total cost,
emergency-fund range, compound growth, inflation-adjusted value, fee impact, salary-vs-total-compensation) that
are not yet wired into a dedicated widget in every lesson that could use one — a reasonable next increment.
