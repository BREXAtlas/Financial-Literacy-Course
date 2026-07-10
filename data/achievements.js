// Ram Ready Financial Futures — Achievements
// Achievements reward learning, resilience, and evidence use — never
// simulated net worth alone. No loot boxes, wagering, or randomized rewards.

export const ACHIEVEMENTS = [
  { id: "future-caster", label: "Future Caster", description: "Completed vision-casting onboarding and set a personal financial-education direction.", path: "foundations" },
  { id: "bank-account-navigator", label: "Bank Account Navigator", description: "Compared banks, credit unions, and account types to make an informed deposit choice.", path: "foundations" },
  { id: "paycheck-decoder", label: "Paycheck Decoder", description: "Read a fictional pay stub and explained the difference between gross and net pay.", path: "foundations" },
  { id: "cash-flow-builder", label: "Cash Flow Builder", description: "Built a spending plan that accounted for fixed, variable, and unexpected costs.", path: "foundations" },
  { id: "credit-contract-reader", label: "Credit Contract Reader", description: "Compared the total cost of credit under different payment strategies.", path: "foundations" },
  { id: "emergency-route-planner", label: "Emergency Route Planner", description: "Planned a response to a financial disruption using multiple recovery tools.", path: "foundations" },
  { id: "cost-of-getting-around", label: "Cost of Getting Around", description: "Compared the total ownership cost of different transportation choices.", path: "foundations" },
  { id: "career-ror-explorer", label: "Career ROI Explorer", description: "Weighed education costs against career and earnings uncertainty.", path: "foundations" },
  { id: "tax-translator", label: "Tax Translator", description: "Explained the difference between filing and paying, and deductions and credits.", path: "foundations" },
  { id: "benefit-detective", label: "Benefit Detective", description: "Compared total compensation, not just salary, across job offers.", path: "foundations" },
  { id: "balance-sheet-builder", label: "Balance Sheet Builder", description: "Built a simple assets-and-liabilities balance sheet.", path: "foundations" },
  { id: "risk-balancer", label: "Risk Balancer", description: "Compared liquidity, safety, and return across cash-equivalent tools.", path: "foundations" },
  { id: "investor-vocabulary-builder", label: "Investor Vocabulary Builder", description: "Explained the difference between owning stock, holding a bond, and buying a fund.", path: "foundations" },
  { id: "business-boundary-builder", label: "Business Boundary Builder", description: "Compared sole proprietorship, LLC, partnership, and corporation tradeoffs.", path: "foundations" },
  { id: "business-owner-boundary-keeper", label: "Business Owner Boundary Keeper", description: "Kept business and personal money separate in a simulated scenario.", path: "foundations" },
  { id: "home-and-housing-navigator", label: "Home and Housing Navigator", description: "Compared renting, buying, and shared-housing tradeoffs.", path: "foundations" },
  { id: "protection-planner", label: "Protection Planner", description: "Matched insurance types to real risk-transfer scenarios.", path: "foundations" },
  { id: "relationship-money-communicator", label: "Relationship Money Communicator", description: "Practiced financial communication and boundary-setting with others.", path: "foundations" },
  { id: "wealth-tracker", label: "Wealth Tracker", description: "Tracked net worth and financial-health measures without treating them as the only success measure.", path: "foundations" },
  { id: "long-game-planner", label: "Long-Game Planner", description: "Stress-tested a long-term financial plan under multiple assumptions.", path: "foundations" },
  { id: "systems-thinker", label: "Systems Thinker", description: "Explained why net worth is a balance-sheet concept, not a pile of cash.", path: "wealth-quest" },
  { id: "income-vs-wealth-analyst", label: "Income vs. Wealth Analyst", description: "Distinguished high income from durable, diversified wealth.", path: "wealth-quest" },
  { id: "income-shock-navigator", label: "Income Shock Navigator", description: "Planned around a short or uncertain high-income earning window.", path: "wealth-quest" },
  { id: "equity-and-scale-analyst", label: "Equity and Scale Analyst", description: "Distinguished revenue, profit, equity, and valuation in a growing business.", path: "wealth-quest" },
  { id: "professional-team-builder", label: "Professional Team Builder", description: "Identified the right professional role and verification steps for a scenario.", path: "wealth-quest" },
  { id: "private-banking-decoder", label: "Private Banking Decoder", description: "Explained what private banking does and does not guarantee.", path: "wealth-quest" },
  { id: "investment-policy-architect", label: "Investment Policy Architect", description: "Built a documented decision system instead of a single allocation guess.", path: "wealth-quest" },
  { id: "illiquidity-analyst", label: "Illiquidity Analyst", description: "Weighed the tradeoffs of private, illiquid investments.", path: "wealth-quest" },
  { id: "tax-discipline-analyst", label: "Tax Discipline Analyst", description: "Distinguished legitimate tax planning from prohibited evasion.", path: "wealth-quest" },
  { id: "estate-and-giving-navigator", label: "Estate and Giving Navigator", description: "Compared wills, trusts, beneficiaries, and giving tools at a general level.", path: "wealth-quest" },
  { id: "family-office-analyst", label: "Family Office Analyst", description: "Weighed when complexity justifies a family office or outsourced experts.", path: "wealth-quest" },
  { id: "governance-guardian", label: "Governance Guardian", description: "Applied governance controls to prevent costly confusion.", path: "wealth-quest" },
  { id: "liquidity-strategist", label: "Liquidity Strategist", description: "Managed concentrated stock and liquidity tradeoffs.", path: "wealth-quest" },
  { id: "borrowing-against-assets-analyst", label: "Borrowing-Against-Assets Analyst", description: "Explained the real risks behind borrowing against appreciated assets.", path: "wealth-quest" },
  { id: "visibility-and-security-analyst", label: "Visibility and Security Analyst", description: "Weighed the security and reputational tradeoffs of visible wealth.", path: "wealth-quest" },
  { id: "systems-wealth-analyst", label: "Systems Wealth Analyst", description: "Explained why billionaire wealth is usually ownership, not cash.", path: "wealth-quest" },
  { id: "valuation-and-control-analyst", label: "Valuation and Control Analyst", description: "Distinguished market valuation from guaranteed cash.", path: "wealth-quest" },
  { id: "policy-and-scrutiny-analyst", label: "Policy and Scrutiny Analyst", description: "Weighed multiple perspectives on regulation, tax, and public scrutiny.", path: "wealth-quest" },
  { id: "philanthropy-and-power-analyst", label: "Philanthropy and Power Analyst", description: "Weighed the reach and limits of philanthropy and foundations.", path: "wealth-quest" },
  { id: "boardroom-systems-strategist", label: "Boardroom Systems Strategist", description: "Balanced competing stakeholder priorities in the final systems simulation.", path: "wealth-quest" }
];

export const ACT_CELEBRATIONS = [
  { id: "act1-complete", act: 1, label: "Starting Your Financial Life — Complete", path: "foundations" },
  { id: "act2-complete", act: 2, label: "Handling Real Life — Complete", path: "foundations" },
  { id: "act3-complete", act: 3, label: "Building Assets and Options — Complete", path: "foundations" },
  { id: "act4-complete", act: 4, label: "Protecting and Sustaining the Plan — Complete", path: "foundations" }
];

export const TIER_CELEBRATIONS = [
  { id: "tier1-complete", tier: 1, label: "Tier I Systems — Complete", path: "wealth-quest" },
  { id: "tier2-complete", tier: 2, label: "Tier II Systems — Complete", path: "wealth-quest" },
  { id: "tier3-complete", tier: 3, label: "Tier III Systems — Complete", path: "wealth-quest" },
  { id: "tier4-complete", tier: 4, label: "Tier IV Systems — Complete", path: "wealth-quest" }
];

export function getAchievementById(id) {
  return ACHIEVEMENTS.find((a) => a.id === id) || null;
}
