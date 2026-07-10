// Ram Ready Financial Futures — Browser-Generated Certificates
//
// Opens a print-friendly certificate in a new tab. The learner uses the
// browser's own "Print to PDF" option — no PDF library or external service
// is used, so nothing is uploaded anywhere.

const CERT_COPY = {
  foundations: {
    path: "Financial Foundations Story",
    skills: [
      "Banking, credit, and paycheck fundamentals",
      "Budgeting and cash-flow planning",
      "Assets, liabilities, and net worth",
      "Investing vocabulary and risk tradeoffs",
      "Long-term planning under uncertainty"
    ]
  },
  "wealth-quest": {
    path: "Future Wealth Quest",
    skills: [
      "Wealth systems from $1 million to multi-billion-dollar ownership",
      "Professional-team verification",
      "Governance, liquidity, and concentration risk",
      "Estate, giving, and tax-discipline concepts",
      "Stakeholder-based decision making"
    ]
  },
  full: {
    path: "Full Ram Ready Financial Futures",
    skills: [
      "Complete Financial Foundations Story",
      "Complete Future Wealth Quest",
      "Applied financial-systems literacy from a first paycheck through complex wealth"
    ]
  }
};

export function generateCertificate({ pathId, displayName }) {
  const copy = CERT_COPY[pathId];
  if (!copy) throw new Error(`Unknown certificate path: ${pathId}`);
  const name = displayName?.trim() || "Learner";
  const date = new Date().toISOString().slice(0, 10);

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Certificate — ${escapeHtml(copy.path)}</title>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; margin: 0; padding: 3rem; background: #fff; color: #1a1a1a; }
  .cert { border: 6px solid #245397; padding: 3rem; text-align: center; max-width: 800px; margin: 0 auto; }
  .cert h1 { color: #245397; font-size: 1.6rem; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.25rem; }
  .cert .gold-rule { height: 4px; width: 120px; background: #F0C33B; margin: 1rem auto; }
  .cert .name { font-size: 2rem; margin: 1.5rem 0 0.5rem; }
  .cert .path { font-size: 1.25rem; color: #245397; margin-bottom: 1.5rem; }
  .cert ul { text-align: left; display: inline-block; margin: 0 auto 1.5rem; }
  .cert .notice { font-size: 0.75rem; color: #555; margin-top: 2rem; line-height: 1.5; }
  .cert .date { margin-top: 1rem; font-size: 0.9rem; }
  @media print { body { padding: 0; } }
</style>
</head>
<body>
  <div class="cert">
    <h1>Ram Ready Financial Futures</h1>
    <div class="gold-rule"></div>
    <p>This certifies that</p>
    <p class="name">${escapeHtml(name)}</p>
    <p class="path">has completed ${escapeHtml(copy.path)}</p>
    <p><strong>Skills covered:</strong></p>
    <ul>${copy.skills.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
    <p class="date">Completion date: ${date}</p>
    <p class="notice">
      Ram Ready Financial Futures is an independent, open-source educational pilot.
      This certificate is not official Angelo State University credit, a transcript
      credential, a professional certification, or a financial-adviser qualification.
      It documents completion of introductory financial-education content only.
    </p>
  </div>
  <script>window.onload = () => window.print();</script>
</body>
</html>`;

  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
  }
  return html;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
