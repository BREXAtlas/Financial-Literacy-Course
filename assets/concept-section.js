// Ram Ready Financial Futures — Concept Section Renderer
//
// Renders the nine-part concept explanation (what / why / how / cost / risks /
// who may benefit / who may not benefit / when misunderstood / verify) as a
// grouped, responsive card layout instead of a single indented definition
// list. Grouping and headings carry the meaning — color is decorative only.
// See section 6 of the course repair brief and docs/ACCESSIBILITY.md.

const GROUPS = [
  { title: "Understand it", items: [["what", "What"], ["why", "Why it exists"]] },
  { title: "Possible value", items: [["how", "How it may help"], ["whoMayBenefit", "Who may benefit"]] },
  { title: "Tradeoffs", items: [["cost", "What it may cost"], ["risks", "Risks or limitations"], ["whoMayNotBenefit", "Who may not benefit"]] },
  { title: "Use carefully", items: [["misunderstandingRisk", "When misunderstood"], ["verifyNote", "Verify"]] }
];

export function renderConceptSection(container, conceptExplanation = {}, resolveText = (t) => t || "") {
  container.innerHTML = "";
  container.className = "concept-grid";

  for (const group of GROUPS) {
    const cards = group.items.filter(([key]) => conceptExplanation[key]);
    if (cards.length === 0) continue;

    const section = document.createElement("section");
    section.className = "concept-group";
    const heading = document.createElement("h3");
    heading.className = "concept-group__title";
    heading.textContent = group.title;
    section.appendChild(heading);

    for (const [key, label] of cards) {
      const card = document.createElement("div");
      card.className = "concept-card";
      const cardHeading = document.createElement("h4");
      cardHeading.textContent = label;
      const cardBody = document.createElement("p");
      cardBody.textContent = resolveText(conceptExplanation[key]);
      card.appendChild(cardHeading);
      card.appendChild(cardBody);
      section.appendChild(card);
    }

    container.appendChild(section);
  }
}
