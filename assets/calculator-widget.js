// Ram Ready Financial Futures — Calculator Widget Renderer
//
// Renders a transparent, interactive educational calculator: inputs, a
// "Calculate" action, a formatted result, a collapsible plain-language
// "How this is calculated" guide, assumptions, limitations, sources, and a
// review date. Every calculator states its estimate is illustrative, never
// a promise. See assets/calculator-engine.js and section 9-10 of the course
// repair brief.

import { renderSourceChips } from "./source-renderer.js";

export function renderCalculatorWidget(container, config) {
  const { title, description, inputs, compute, renderResult, guideSteps, sourceIds, reviewedDate } = config;
  container.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "calculator-widget";

  const heading = document.createElement("h3");
  heading.textContent = title;
  wrap.appendChild(heading);

  if (description) {
    const p = document.createElement("p");
    p.textContent = description;
    wrap.appendChild(p);
  }

  const form = document.createElement("div");
  form.className = "option-grid calculator-widget__inputs";
  const fields = {};
  for (const input of inputs) {
    const label = document.createElement("label");
    label.textContent = input.label;
    const field = document.createElement("input");
    field.type = "number";
    field.id = `calc-${config.id}-${input.key}`;
    field.value = input.default;
    if (input.step) field.step = input.step;
    label.appendChild(field);
    form.appendChild(label);
    fields[input.key] = field;
  }
  wrap.appendChild(form);

  const runBtn = document.createElement("button");
  runBtn.type = "button";
  runBtn.className = "btn btn-outline";
  runBtn.textContent = "Calculate";
  wrap.appendChild(runBtn);

  const resultEl = document.createElement("div");
  resultEl.className = "calculator-widget__result";
  resultEl.setAttribute("aria-live", "polite");
  wrap.appendChild(resultEl);

  function run() {
    const values = {};
    for (const input of inputs) {
      values[input.key] = Number(fields[input.key].value);
    }
    const result = compute(values);
    resultEl.innerHTML = renderResult(result);
  }
  runBtn.addEventListener("click", run);
  run();

  const guide = document.createElement("details");
  guide.className = "calculator-widget__guide";
  const summary = document.createElement("summary");
  summary.textContent = "How this is calculated";
  guide.appendChild(summary);
  const steps = document.createElement("ol");
  steps.innerHTML = guideSteps.map((s) => `<li>${s}</li>`).join("");
  guide.appendChild(steps);
  wrap.appendChild(guide);

  const meta = document.createElement("p");
  meta.className = "viz-meta";
  meta.textContent = `Illustrative estimate, not a forecast.${reviewedDate ? ` Reviewed ${reviewedDate}.` : ""}`;
  wrap.appendChild(meta);

  if (sourceIds?.length) {
    const sourcesEl = document.createElement("p");
    sourcesEl.className = "viz-meta";
    sourcesEl.innerHTML = `<strong>Sources:</strong> ${renderSourceChips(sourceIds)}`;
    wrap.appendChild(sourcesEl);
  }

  container.appendChild(wrap);
}
