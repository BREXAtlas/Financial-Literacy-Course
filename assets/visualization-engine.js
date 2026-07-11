// Ram Ready Financial Futures — Visualization Engine
//
// Renders lesson-specific visualizations from structured data (see
// data/visualizations.js) using native SVG-free CSS/HTML only — no chart
// library, no build step, no external requests. Every visualization always
// renders: a labeled visual, an accessible data table, its assumptions, its
// sources, and a review date. Values are always printed as text on or next
// to each mark, so meaning never depends on color alone. No animation is
// used, so there is nothing to disable for prefers-reduced-motion.
// See docs/VISUALIZATION_SYSTEM.md.

import { renderSourceChips } from "./source-renderer.js";

export function renderVisualization(container, spec, resolveText = (t) => t || "") {
  if (!container || !spec) return;
  container.innerHTML = "";

  const figure = document.createElement("figure");
  figure.className = "viz-figure";

  const caption = document.createElement("figcaption");
  const heading = document.createElement("h3");
  heading.textContent = resolveText(spec.title);
  caption.appendChild(heading);
  if (spec.description) {
    const p = document.createElement("p");
    p.textContent = resolveText(spec.description);
    caption.appendChild(p);
  }
  figure.appendChild(caption);

  const visual = document.createElement("div");
  visual.className = "viz-visual";
  visual.setAttribute("role", "img");
  visual.setAttribute("aria-label", spec.accessibilitySummary || spec.title);
  renderByType(visual, spec);
  figure.appendChild(visual);

  const details = document.createElement("details");
  details.className = "viz-table-details";
  const summary = document.createElement("summary");
  summary.textContent = "View as a table";
  details.appendChild(summary);
  details.appendChild(buildTable(spec));
  figure.appendChild(details);

  if (spec.accessibilitySummary) {
    const summaryText = document.createElement("p");
    summaryText.className = "viz-meta viz-accessibility-summary";
    summaryText.textContent = spec.accessibilitySummary;
    figure.appendChild(summaryText);
  }

  if (spec.assumptions?.length) {
    const assumptionsEl = document.createElement("p");
    assumptionsEl.className = "viz-meta";
    assumptionsEl.innerHTML = `<strong>Assumptions:</strong> ${spec.assumptions.map(escapeHtml).join("; ")}`;
    figure.appendChild(assumptionsEl);
  }

  const metaLine = document.createElement("p");
  metaLine.className = "viz-meta";
  metaLine.textContent = `Illustrative estimate, not a forecast.${spec.reviewedDate ? ` Reviewed ${spec.reviewedDate}.` : ""}`;
  figure.appendChild(metaLine);

  if (spec.sourceIds?.length) {
    const sourcesEl = document.createElement("p");
    sourcesEl.className = "viz-meta";
    sourcesEl.innerHTML = `<strong>Sources:</strong> ${renderSourceChips(spec.sourceIds)}`;
    figure.appendChild(sourcesEl);
  }

  container.appendChild(figure);
}

function renderByType(container, spec) {
  switch (spec.type) {
    case "comparison": return renderComparison(container, spec);
    case "stacked-bar": return renderStackedBar(container, spec);
    case "timeline": return renderTimeline(container, spec);
    case "flow": return renderFlow(container, spec);
    case "matrix": return renderMatrix(container, spec);
    case "bar":
    default: return renderBar(container, spec);
  }
}

function formatUnit(value, unit) {
  if (value === undefined || value === null) return "—";
  if (unit === "$") return `$${Number(value).toLocaleString()}`;
  if (unit === "%") return `${value}%`;
  if (unit === "months") return `${value} mo`;
  if (unit === "years") return `${value} yr`;
  return String(value);
}

function renderBar(container, spec) {
  const max = Math.max(...spec.data.map((d) => Number(d.value) || 0), 1);
  const wrap = document.createElement("div");
  wrap.className = "viz-bars";
  for (const d of spec.data) {
    const pct = Math.max(2, Math.round((Number(d.value) || 0) / max * 100));
    const row = document.createElement("div");
    row.className = "viz-bar-row";
    row.innerHTML = `
      <span class="viz-bar-label">${escapeHtml(d.label)}</span>
      <span class="viz-bar-track"><span class="viz-bar-fill" style="width:${pct}%"></span></span>
      <span class="viz-bar-value">${escapeHtml(formatUnit(d.value, spec.labels?.unit))}</span>`;
    wrap.appendChild(row);
  }
  container.appendChild(wrap);
}

function renderComparison(container, spec) {
  const max = Math.max(...spec.data.flatMap((g) => g.series.map((s) => Number(s.value) || 0)), 1);
  const wrap = document.createElement("div");
  wrap.className = "viz-comparison";
  for (const group of spec.data) {
    const groupEl = document.createElement("div");
    groupEl.className = "viz-comparison-group";
    const title = document.createElement("p");
    title.className = "viz-comparison-title";
    title.textContent = group.label;
    groupEl.appendChild(title);
    for (const s of group.series) {
      const pct = Math.max(2, Math.round((Number(s.value) || 0) / max * 100));
      const row = document.createElement("div");
      row.className = "viz-bar-row";
      row.innerHTML = `
        <span class="viz-bar-label">${escapeHtml(s.name)}</span>
        <span class="viz-bar-track"><span class="viz-bar-fill" style="width:${pct}%"></span></span>
        <span class="viz-bar-value">${escapeHtml(formatUnit(s.value, spec.labels?.unit))}</span>`;
      groupEl.appendChild(row);
    }
    wrap.appendChild(groupEl);
  }
  container.appendChild(wrap);
}

function renderStackedBar(container, spec) {
  const wrap = document.createElement("div");
  wrap.className = "viz-stacked-wrap";
  for (const bar of spec.data) {
    const total = bar.segments.reduce((s, seg) => s + (Number(seg.value) || 0), 0) || 1;
    const barEl = document.createElement("div");
    barEl.className = "viz-stacked-bar-group";
    const label = document.createElement("p");
    label.className = "viz-comparison-title";
    label.textContent = bar.label;
    barEl.appendChild(label);
    const track = document.createElement("div");
    track.className = "viz-stacked-track";
    for (const seg of bar.segments) {
      const pct = Math.max(1, (Number(seg.value) || 0) / total * 100);
      const segEl = document.createElement("span");
      segEl.className = "viz-stacked-seg";
      segEl.style.width = `${pct}%`;
      segEl.textContent = pct > 14 ? seg.name : "";
      barEl.dataset.total = total;
      track.appendChild(segEl);
    }
    barEl.appendChild(track);
    const legend = document.createElement("ul");
    legend.className = "viz-legend";
    legend.innerHTML = bar.segments.map((seg) => `<li>${escapeHtml(seg.name)}: ${escapeHtml(formatUnit(seg.value, spec.labels?.unit))}</li>`).join("");
    barEl.appendChild(legend);
    wrap.appendChild(barEl);
  }
  container.appendChild(wrap);
}

function renderTimeline(container, spec) {
  const list = document.createElement("ol");
  list.className = "viz-timeline";
  for (const step of spec.data) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${escapeHtml(step.label)}</strong>${step.value ? ` — ${escapeHtml(String(step.value))}` : ""}${step.description ? `<p>${escapeHtml(step.description)}</p>` : ""}`;
    list.appendChild(li);
  }
  container.appendChild(list);
}

function renderFlow(container, spec) {
  const wrap = document.createElement("div");
  wrap.className = "viz-flow";
  for (const step of spec.data) {
    const box = document.createElement("div");
    box.className = "viz-flow-step";
    box.innerHTML = `<strong>${escapeHtml(step.label)}</strong>${step.description ? `<p>${escapeHtml(step.description)}</p>` : ""}`;
    wrap.appendChild(box);
  }
  container.appendChild(wrap);
}

function renderMatrix(container, spec) {
  const xLevels = spec.labels?.xLevels || [...new Set(spec.data.map((d) => d.x))];
  const yLevels = spec.labels?.yLevels || [...new Set(spec.data.map((d) => d.y))];
  const table = document.createElement("table");
  table.className = "viz-matrix-table";
  const cornerLabel = `${spec.labels?.yAxis || ""} / ${spec.labels?.xAxis || ""}`;
  table.innerHTML = `<thead><tr><th scope="col">${escapeHtml(cornerLabel)}</th>${xLevels.map((x) => `<th scope="col">${escapeHtml(x)}</th>`).join("")}</tr></thead>`;
  const tbody = document.createElement("tbody");
  for (const y of yLevels) {
    const cells = xLevels.map((x) => {
      const items = spec.data.filter((d) => d.x === x && d.y === y);
      return `<td>${items.length ? items.map((i) => escapeHtml(i.label)).join(", ") : "—"}</td>`;
    }).join("");
    const rowHtml = `<tr><th scope="row">${escapeHtml(y)}</th>${cells}</tr>`;
    tbody.insertAdjacentHTML("beforeend", rowHtml);
  }
  table.appendChild(tbody);
  container.appendChild(table);
}

function buildTable(spec) {
  const table = document.createElement("table");
  table.className = "viz-data-table";
  if (spec.type === "comparison") {
    const seriesNames = [...new Set(spec.data.flatMap((g) => g.series.map((s) => s.name)))];
    table.innerHTML = `<thead><tr><th scope="col">Category</th>${seriesNames.map((n) => `<th scope="col">${escapeHtml(n)}</th>`).join("")}</tr></thead>` +
      `<tbody>${spec.data.map((g) => `<tr><th scope="row">${escapeHtml(g.label)}</th>${seriesNames.map((n) => {
        const found = g.series.find((s) => s.name === n);
        return `<td>${found ? escapeHtml(formatUnit(found.value, spec.labels?.unit)) : "—"}</td>`;
      }).join("")}</tr>`).join("")}</tbody>`;
  } else if (spec.type === "stacked-bar") {
    const segNames = [...new Set(spec.data.flatMap((b) => b.segments.map((s) => s.name)))];
    table.innerHTML = `<thead><tr><th scope="col">Bar</th>${segNames.map((n) => `<th scope="col">${escapeHtml(n)}</th>`).join("")}</tr></thead>` +
      `<tbody>${spec.data.map((b) => `<tr><th scope="row">${escapeHtml(b.label)}</th>${segNames.map((n) => {
        const found = b.segments.find((s) => s.name === n);
        return `<td>${found ? escapeHtml(formatUnit(found.value, spec.labels?.unit)) : "—"}</td>`;
      }).join("")}</tr>`).join("")}</tbody>`;
  } else if (spec.type === "matrix") {
    table.innerHTML = `<thead><tr><th scope="col">Item</th><th scope="col">${escapeHtml(spec.labels?.xAxis || "X")}</th><th scope="col">${escapeHtml(spec.labels?.yAxis || "Y")}</th></tr></thead>` +
      `<tbody>${spec.data.map((d) => `<tr><th scope="row">${escapeHtml(d.label)}</th><td>${escapeHtml(d.x)}</td><td>${escapeHtml(d.y)}</td></tr>`).join("")}</tbody>`;
  } else if (spec.type === "timeline" || spec.type === "flow") {
    table.innerHTML = `<thead><tr><th scope="col">Step</th><th scope="col">Detail</th></tr></thead>` +
      `<tbody>${spec.data.map((d) => `<tr><th scope="row">${escapeHtml(d.label)}</th><td>${escapeHtml([d.value, d.description].filter(Boolean).join(" — "))}</td></tr>`).join("")}</tbody>`;
  } else {
    table.innerHTML = `<thead><tr><th scope="col">${escapeHtml(spec.labels?.xAxis || "Category")}</th><th scope="col">${escapeHtml(spec.labels?.yAxis || "Value")}</th></tr></thead>` +
      `<tbody>${spec.data.map((d) => `<tr><th scope="row">${escapeHtml(d.label)}</th><td>${escapeHtml(formatUnit(d.value, spec.labels?.unit))}</td></tr>`).join("")}</tbody>`;
  }
  return table;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}
