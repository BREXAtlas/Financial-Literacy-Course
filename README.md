# Ram Ready Financial Futures

**Learn how money systems work—from a first paycheck to complex wealth—without promises, pressure, product
sales, or get-rich-quick claims.**

Public site: **https://brexatlas.github.io/Financial-Literacy-Course/**

Ram Ready Financial Futures is an **independent, open-source educational pilot** built for review and possible
future coordination with Angelo State University. It is not an official Angelo State University course,
policy, credential, or financial-aid resource. See `BRANDING-NOTICE.md`.

## Two learning paths, one shell

1. **Financial Foundations Story** — a continuous, personalized 20-episode storyline across four acts: from a
   first college semester through banking, credit, budgeting, careers, taxes, investing, business basics,
   housing, protection, relationships, and a "Road to $1.5 Million" planning capstone.
2. **Future Wealth Quest** — 20 advanced, optional quests examining how wealth may be owned, managed,
   protected, financed, measured, transferred, and governed, from roughly $1 million through multi-billion-
   dollar systems. These tiers describe **systems to understand**, not a ranking of people.

## Who it's for

Built with first-year Angelo State University students in mind, while remaining openly accessible to the
public. See `docs/INSTRUCTOR_PILOT_GUIDE.md`.

## Bounded personalization

The full curriculum is prewritten, sourced, and reviewed — nothing is generated from scratch. Personalization
works by selecting **approved story fragments** at specific narrative slots based on a learner's onboarding
selections (values, interests, career direction, life vision, financial goal). Financial facts, quiz answers,
calculator results, and consequences are identical for every learner. See `docs/PERSONALIZATION_MODEL.md`.

## Why core lessons are deterministic

The deterministic template engine (`llm/template-provider.js`) can render the complete course with no AI model
at all. This is the only mode the public site uses unless a learner explicitly opts in to local personalization.

## Optional open-source local AI personalization

No proprietary LLM API (OpenAI, Anthropic, Gemini, etc.) is used anywhere in this product. An optional,
consent-gated [WebLLM](https://github.com/mlc-ai/web-llm) provider can lightly smooth transitions between
prewritten fragments entirely inside the learner's browser; an [Ollama](https://github.com/ollama/ollama)
provider supports local/institutional developer setups. Both are validated against a strict output filter and
fall back to the deterministic template on any failure. See `docs/OPEN_SOURCE_AI.md`.

## Source and neutrality policy

Every episode and quest cites source IDs from a centralized registry (`data/source-registry.js`, browsable at
`sources.html`). Comparisons always present tradeoffs, never a single correct universal answer. See
`docs/SOURCE_POLICY.md`.

## Privacy model

No Social Security numbers, bank credentials, account numbers, or tax documents are ever requested. Guest data
lives only in local storage. See `privacy.html` and `docs/PRIVACY_MODEL.md`.

## Guest mode

Fully functional without any account or network call — profile, progress, choices, stars, achievements, and
calculator assumptions all persist locally, with export/import and full reset. See
`assets/profile-engine.js`.

## Optional Supabase mode

A separate, dedicated Supabase project (never the Digital-Literacy-Course- project) can enable passwordless
email sign-in and cross-device sync, with Row Level Security scoping every row to its owner. See
`SUPABASE-SETUP.md`.

## Local run instructions

See `QUICKSTART.md`. Short version: `python3 -m http.server 8080`, no build step required.

## GitHub Pages deployment

`.github/workflows/pages.yml` deploys on every push to `main` using the official GitHub Pages actions — no
build framework required. See `DEPLOYMENT.md`.

## Repository structure

```
index.html, foundations.html, wealth-quest.html, journey.html, achievements.html,
profile.html, sources.html, instructor-guide.html, privacy.html, disclaimer.html,
auth-callback.html, onboarding.html
assets/      — styles, print styles, and all rendering/engine JS
data/        — curriculum, source registry, onboarding options, fragments, achievements
llm/         — open-source LLM provider abstraction + output validator
supabase/    — optional migration
docs/        — curriculum map, architecture, personalization, AI, sources, accessibility, instructor guide
scripts/     — scripts/validate-site.mjs
.github/     — Pages workflow + issue templates
```

## Accessibility

Skip links, full keyboard navigation, visible focus states, screen-reader labels, reduced-motion support,
no-color-alone signaling, mobile-first responsive layout, plain-language explanations, and print-friendly
lesson summaries. See `docs/ACCESSIBILITY.md`.

## Contributing

See `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.

## Licensing

MIT for original code, CC BY 4.0 for original curriculum text. See `LICENSE.md`.
