# Open-Source AI

No proprietary LLM API (OpenAI, Anthropic, Gemini, or similar) is used anywhere in this product. See
`llm/llm-provider.js` for the provider abstraction and `llm/output-validator.js` for the validation gate every
generated string must pass before being shown to a learner.

## Providers

### 1. Template (default)

Fully deterministic. Joins prewritten fragments with token substitution. Requires no download and works on
every supported device. See `llm/template-provider.js`.

### 2. WebLLM (optional, in-browser)

- Library: [mlc-ai/web-llm](https://github.com/mlc-ai/web-llm)
- Model: **Qwen2.5-0.5B-Instruct-q4f16_1-MLC**
- License: Apache-2.0
- Approximate download size: ~400 MB
- Device requirement: modern browser with WebGPU support, ~4 GB free memory recommended
- Reviewed: 2026-07-10

Requires explicit learner consent (a toggle on `profile.html`) before any download begins, and the download
size/device requirement is shown first. Falls back to the template provider automatically on any failure.
Never sends profile data anywhere — inference runs entirely in the browser.

### 3. Ollama (developer / local-institution mode)

- Library: [ollama/ollama](https://github.com/ollama/ollama)
- Model: **qwen2.5:0.5b**
- License: Apache-2.0
- Approximate download size: ~400 MB
- Reviewed: 2026-07-10

Communicates only with a learner- or institution-controlled local endpoint URL that must be explicitly
configured (`providerConfig.endpointUrl`). Disabled by default and unreachable from the public GitHub Pages
deployment unless an operator deliberately configures it.

## Boundaries (enforced by `llm/output-validator.js`)

A model may only: resolve the learner's name and pronouns, select approved transition language, join approved
fragments more naturally, mention selected interests using preapproved phrasing, and produce a short recap of
facts already present in the structured lesson data.

A model may never: generate financial advice, invent numbers/returns, change calculator results, change quiz
answers, change consequences, introduce products, provide tax/legal conclusions, generate citations, infer
sensitive traits, or modify learning objectives. The validator checks for advice-like language, sensitive-trait
inference, introduced citations/links, and unsupported new numbers; any failure falls back to the deterministic
template output.

Model weights are never committed to this repository and no model is loaded automatically.
