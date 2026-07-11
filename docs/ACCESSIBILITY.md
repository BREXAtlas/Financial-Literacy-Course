# Accessibility

Ram Ready Financial Futures targets WCAG-oriented practices throughout. See `assets/accessibility.js` for
shared helpers and `assets/styles.css` for focus/contrast rules.

## Implemented practices

- Semantic headings on every page (`h1` per page, nested `h2`/`h3`)
- Skip link to main content (`.skip-link`, `initSkipLink()`)
- Full keyboard navigation; no functionality is mouse-only
- Visible focus states via `:focus-visible` (3px outline, never suppressed)
- Screen-reader labels on all interactive controls (`<label>` elements, `aria-live` regions for celebrations
  and status messages)
- Accessible form errors (`.field-error`, associated via visible text, not color alone)
- No required audio; celebrations are visual/text and respect `prefers-reduced-motion`
- Sufficient color contrast against both light and dark surfaces (see CSS custom properties)
- No information communicated by color alone — story/quest map nodes use both a left-border color **and** a
  text label ("completed"/"active"/"locked")
- Responsive, mobile-first layout with large (44px minimum) touch targets
- Plain-language explanations throughout lesson content
- `renderAccessibleListAlternative()` provides a non-visual list alternative to the story/quest map
- Print-friendly lesson summaries (`assets/print.css`)
- No timed quizzes anywhere in the course

## Per-card choice results

Each choice card (`assets/choice-cards.js`) owns its own result region directly beneath its "Choose this" button,
marked with `aria-live="polite"` and a focusable (`tabindex="-1"`) result heading. Selecting a card:

- Populates and reveals only that card's result region; any other open result is collapsed and cleared.
- Marks the selected card with `data-selected="true"` (a visible border/label change, not color alone).
- Moves focus to the result heading with `{ preventScroll: true }` so the learner is not scrolled away from the
  card they just selected.
- Never duplicates stars or progress — `recordChoice()` overwrites the stored choice for that node, and star
  computation is a boolean-gated count, not a per-click counter, so previewing multiple paths before continuing
  is safe.

This replaced a single shared `#consequence-panel` below the whole choice list, which required scrolling and
could not show more than one result at a time.

## Visualization accessibility

`assets/visualization-engine.js` renders every chart with: a heading and description, a `role="img"` visual
with an `aria-label` accessibility summary, a `<details>`-disclosed data table with the same numbers (`View as a
table`), and text assumptions/sources/review date. No visualization relies on color alone — every value is
printed as text on or beside its mark. No visualization animates, so there is nothing to disable under
`prefers-reduced-motion`.

## Manual testing checklist

- [ ] Full keyboard-only pass through onboarding, an episode, and a quest
- [ ] Screen reader pass (VoiceOver/NVDA) on the story map and episode player
- [ ] `prefers-reduced-motion: reduce` verified to disable celebration animation
- [ ] Mobile viewport (360px) and desktop viewport layouts
- [ ] Color-contrast spot check on both light and dark system themes
