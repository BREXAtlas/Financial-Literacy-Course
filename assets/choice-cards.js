// Ram Ready Financial Futures — Shared Choice Card Renderer
//
// Renders scenario choice cards with a per-card result area (right away,
// one year later, long term, what could change this outcome, recovery
// path, and simulation effect), used identically by Financial Foundations
// episodes and Future Wealth quests. Selecting a different card collapses
// the previous result and announces the new one; it never writes into a
// single shared panel. See section 3.1 of the course repair brief.

export function renderChoiceCards(listEl, choices, entity, { resolveText, onChoose } = {}) {
  const resolve = typeof resolveText === "function" ? resolveText : (t) => t || "";
  listEl.innerHTML = "";
  let selectedChoiceId = null;

  for (const choice of choices) {
    const li = document.createElement("li");
    li.className = "choice-card";
    li.dataset.choiceId = choice.id;
    li.dataset.selected = "false";
    const resultId = `choice-result-${entity.id}-${choice.id}`;
    li.innerHTML = `
      <p><strong>${resolve(choice.text)}</strong></p>
      <p><em>Why someone might choose this:</em> ${resolve(choice.whyChosen)}</p>
      <p><em>Possible benefit:</em> ${resolve(choice.possibleBenefit)}</p>
      <p><em>Possible cost:</em> ${resolve(choice.possibleCost)}</p>
      <p><em>Possible risk:</em> ${resolve(choice.possibleRisk)}</p>
      <button type="button" class="btn btn-outline choose-btn" data-choice-id="${choice.id}" aria-expanded="false" aria-controls="${resultId}">Choose this</button>
      <div class="choice-result" id="${resultId}" hidden aria-live="polite">
        <h3 tabindex="-1">Result of this choice</h3>
        <div class="choice-result__body"></div>
      </div>
    `;
    listEl.appendChild(li);
  }

  listEl.addEventListener("click", (event) => {
    const btn = event.target.closest(".choose-btn");
    if (!btn) return;
    const choiceId = btn.dataset.choiceId;
    const choice = choices.find((c) => c.id === choiceId);
    if (!choice) return;
    selectedChoiceId = choiceId;

    for (const cardEl of listEl.querySelectorAll(".choice-card")) {
      const isSelected = cardEl.dataset.choiceId === choiceId;
      cardEl.dataset.selected = isSelected ? "true" : "false";
      if (!isSelected) {
        const otherResult = cardEl.querySelector(".choice-result");
        otherResult.hidden = true;
        otherResult.querySelector(".choice-result__body").innerHTML = "";
        cardEl.querySelector(".choose-btn").setAttribute("aria-expanded", "false");
      }
    }

    const resultEl = document.getElementById(`choice-result-${entity.id}-${choiceId}`);
    resultEl.querySelector(".choice-result__body").innerHTML = buildResultHtml(entity, choice, resolve);
    resultEl.hidden = false;
    btn.setAttribute("aria-expanded", "true");

    const heading = resultEl.querySelector("h3");
    heading.focus({ preventScroll: true });

    if (onChoose) onChoose(choice);
  });

  return {
    getSelectedChoiceId: () => selectedChoiceId,
    collapseAll: () => {
      for (const cardEl of listEl.querySelectorAll(".choice-card")) {
        cardEl.dataset.selected = "false";
        const result = cardEl.querySelector(".choice-result");
        result.hidden = true;
        cardEl.querySelector(".choose-btn").setAttribute("aria-expanded", "false");
      }
    }
  };
}

function buildResultHtml(entity, choice, resolve) {
  const immediate = resolve(entity.immediateConsequences?.[choice.id] || "");
  const oneYear = resolve(entity.oneYearConsequences?.[choice.id] || "");
  const longTerm = resolve(entity.longTermConsequences?.[choice.id] || "");
  const whatCouldChange = resolve(choice.whatCouldChangeThisOutcome || "");
  const recovery = resolve(entity.recoveryPath || "");
  const simEffect = choice.immediateEffect && Object.keys(choice.immediateEffect).length
    ? Object.entries(choice.immediateEffect)
        .map(([key, value]) => `${formatSimKey(key)}: ${value > 0 ? "+" : ""}${value}`)
        .join(", ")
    : "";

  return `
    <p><strong>Right away:</strong> ${immediate}</p>
    <p><strong>One year later:</strong> ${oneYear}</p>
    <p><strong>Long term:</strong> ${longTerm}</p>
    <p><strong>What could change this outcome:</strong> ${whatCouldChange}</p>
    <p><strong>If this didn't go the way you hoped:</strong> ${recovery}</p>
    ${simEffect ? `<p><strong>Updated simulation effect (illustrative):</strong> ${simEffect}</p>` : ""}
  `;
}

function formatSimKey(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();
}
