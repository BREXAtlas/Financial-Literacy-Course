// Ram Ready Financial Futures — Lesson Visualizations
//
// One structured visualization per Financial Foundations episode and per
// Future Wealth quest (40 total), rendered by assets/visualization-engine.js.
// Every entry ties directly to that lesson's concept — none are decorative.
// All figures are illustrative teaching examples, not forecasts, current
// rates, or real people's finances. See docs/VISUALIZATION_SYSTEM.md.

export const EPISODE_VISUALIZATIONS = {
  ep01: {
    id: "ep01-values-matrix",
    type: "matrix",
    title: "Time-versus-money tradeoff matrix",
    description: "Different first-semester choices demand different amounts of time and money. Neither axis is \"better\" — the matrix just makes the tradeoff visible before choosing.",
    labels: { xAxis: "Money required", yAxis: "Time required", xLevels: ["Lower cost", "Higher cost"], yLevels: ["Lower time", "Higher time"] },
    data: [
      { label: "Building an emergency cushion", x: "Lower cost", y: "Lower time" },
      { label: "Volunteering locally", x: "Lower cost", y: "Higher time" },
      { label: "A weekend trip home", x: "Higher cost", y: "Lower time" },
      { label: "Starting a small side business", x: "Higher cost", y: "Higher time" }
    ],
    assumptions: ["Placement is illustrative and reflects typical patterns, not a rule about any specific choice."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "A 2x2 table plotting four illustrative first-semester choices by time required and money required.",
    reviewedDate: "2026-07-10"
  },
  ep02: {
    id: "ep02-account-comparison",
    type: "comparison",
    title: "Bank, credit union, and digital-bank comparison",
    description: "Illustrative account features side by side. Real fees, rates, and services vary by institution and change over time.",
    labels: { unit: "$" },
    data: [
      { label: "Typical monthly maintenance fee", series: [{ name: "Traditional bank", value: 12 }, { name: "Credit union", value: 5 }, { name: "Digital-only bank", value: 0 }] },
      { label: "Illustrative savings APY (as $ earned per $1,000/yr)", series: [{ name: "Traditional bank", value: 1 }, { name: "Credit union", value: 5 }, { name: "Digital-only bank", value: 40 }] }
    ],
    assumptions: ["Figures are illustrative examples, not current rates.", "Fee waivers (direct deposit, minimum balance) can eliminate the maintenance fee at many institutions."],
    sourceIds: ["fdic-money-smart", "cfpb-your-money-your-goals"],
    accessibilitySummary: "Grouped bar comparison of illustrative monthly fees and illustrative interest earned across three account types.",
    reviewedDate: "2026-07-10"
  },
  ep03: {
    id: "ep03-paycheck-waterfall",
    type: "stacked-bar",
    title: "Gross-to-net pay waterfall",
    description: "Where each dollar of a first biweekly paycheck goes before it reaches a bank account.",
    labels: { unit: "$" },
    data: [
      { label: "Biweekly paycheck ($500 gross)", segments: [
        { name: "Federal withholding", value: 38 },
        { name: "Social Security", value: 31 },
        { name: "Medicare", value: 7.25 },
        { name: "Net pay", value: 423.75 }
      ] }
    ],
    assumptions: ["Illustrative fictional pay stub, not a real employer.", "Actual withholding depends on current IRS tables and Form W-4 elections."],
    sourceIds: ["irs-form-w4"],
    accessibilitySummary: "Single stacked bar dividing a $500 gross paycheck into federal withholding, Social Security, Medicare, and net pay.",
    reviewedDate: "2026-07-10"
  },
  ep04: {
    id: "ep04-budget-methods",
    type: "comparison",
    title: "Budgeting-method comparison",
    description: "The same $1,600 monthly example allocated under two common budgeting approaches. Neither is universally correct.",
    labels: { unit: "$" },
    data: [
      { label: "Zero-based (every dollar assigned)", series: [{ name: "Fixed costs", value: 900 }, { name: "Variable costs", value: 500 }, { name: "Savings", value: 200 }] },
      { label: "50/30/20 percentage split", series: [{ name: "Needs (50%)", value: 800 }, { name: "Wants (30%)", value: 480 }, { name: "Savings (20%)", value: 320 }] }
    ],
    assumptions: ["Uses an illustrative $1,600 monthly example; real budgets vary by income and location."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "Comparison of an illustrative $1,600 monthly budget split under a zero-based method and a 50/30/20 method.",
    reviewedDate: "2026-07-10"
  },
  ep05: {
    id: "ep05-payoff-comparison",
    type: "bar",
    title: "Total interest paid by payment strategy",
    description: "Illustrative $2,000 balance at 22% APR — the same debt, three different fixed monthly payments.",
    labels: { unit: "$", xAxis: "Payment strategy", yAxis: "Total interest paid" },
    data: [
      { label: "Minimum payments only (~2% of balance)", value: 2540 },
      { label: "Fixed $100 per month", value: 480 },
      { label: "Fixed $200 per month", value: 195 }
    ],
    assumptions: ["Illustrative example, not a real account.", "Actual APRs, fees, and minimum-payment formulas vary by issuer and change over time."],
    sourceIds: ["cfpb-credit-reports-scores"],
    accessibilitySummary: "Bar chart showing total interest paid on a $2,000, 22% APR balance under three fixed monthly payment amounts: $2,540 at minimum payments, $480 at $100/month, $195 at $200/month.",
    reviewedDate: "2026-07-10"
  },
  ep06: {
    id: "ep06-emergency-decision-flow",
    type: "flow",
    title: "Emergency decision flow",
    description: "One illustrative path through an unexpected expense, from the moment it happens to rebuilding savings afterward.",
    data: [
      { label: "Unexpected expense occurs", description: "A repair, medical bill, or lost-income event with no warning." },
      { label: "Check the emergency fund", description: "Compare the fund balance to the size of the expense." },
      { label: "Cover what the fund allows", description: "Use available savings first, before higher-cost options." },
      { label: "Use a secondary resource if needed", description: "A campus emergency fund, family help, or a short repayment plan can cover any remaining gap." },
      { label: "Rebuild the fund over following months", description: "Resume regular contributions until the target range is restored." }
    ],
    assumptions: ["A general planning sequence, not a guarantee that every resource will be available in every situation."],
    sourceIds: ["fdic-money-smart"],
    accessibilitySummary: "Five-step flow diagram from an unexpected expense through fund use, secondary resources, and rebuilding savings.",
    reviewedDate: "2026-07-10"
  },
  ep07: {
    id: "ep07-transportation-cost",
    type: "comparison",
    title: "Total transportation cost comparison",
    description: "Owning a car costs more than the monthly payment alone. An illustrative monthly comparison against transit plus occasional rideshares.",
    labels: { unit: "$" },
    data: [
      { label: "Loan or lease payment", series: [{ name: "Owning a car", value: 280 }, { name: "Transit pass + rideshare", value: 0 }] },
      { label: "Insurance", series: [{ name: "Owning a car", value: 120 }, { name: "Transit pass + rideshare", value: 0 }] },
      { label: "Fuel or fares", series: [{ name: "Owning a car", value: 140 }, { name: "Transit pass + rideshare", value: 75 }] },
      { label: "Maintenance (averaged)", series: [{ name: "Owning a car", value: 60 }, { name: "Transit pass + rideshare", value: 20 }] }
    ],
    assumptions: ["Illustrative monthly figures; actual costs vary significantly by location, vehicle, and insurance history."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "Grouped bar chart comparing monthly loan/lease, insurance, fuel, and maintenance costs between owning a car and using transit plus occasional rideshares.",
    reviewedDate: "2026-07-10"
  },
  ep08: {
    id: "ep08-earnings-ranges",
    type: "comparison",
    title: "Illustrative earnings-range comparison by field",
    description: "Historical earnings ranges differ by field and are never a guarantee for any individual. Ranges shown are illustrative, styled after BLS occupational data.",
    labels: { unit: "$" },
    data: [
      { label: "Illustrative healthcare field", series: [{ name: "Lower range", value: 48000 }, { name: "Median", value: 68000 }, { name: "Higher range", value: 98000 }] },
      { label: "Illustrative skilled trade field", series: [{ name: "Lower range", value: 42000 }, { name: "Median", value: 58000 }, { name: "Higher range", value: 85000 }] }
    ],
    assumptions: ["Styled after typical BLS Occupational Outlook Handbook ranges; not current figures for any specific occupation.", "Historical data does not guarantee any individual's future earnings."],
    sourceIds: ["bls-ooh"],
    accessibilitySummary: "Comparison of illustrative lower, median, and higher earnings ranges for two example fields.",
    reviewedDate: "2026-07-10"
  },
  ep09: {
    id: "ep09-tax-workflow",
    type: "flow",
    title: "Tax document workflow",
    description: "The general sequence from receiving income documents to resolving a refund or balance due.",
    data: [
      { label: "Receive W-2 or 1099", description: "Employers and clients report income paid during the year." },
      { label: "Gather receipts and records", description: "Deduction and credit documentation, kept for the required retention period." },
      { label: "Choose standard or itemized deduction", description: "Whichever reduces taxable income more for the situation." },
      { label: "File by the deadline", description: "Or file an extension for the paperwork, though any tax owed is still due on time." },
      { label: "Refund or balance due", description: "A refund is a return of over-withheld pay, not a bonus." }
    ],
    assumptions: ["General individual filing sequence; specific situations (self-employment, multiple states) add steps."],
    sourceIds: ["irs-form-w4"],
    accessibilitySummary: "Five-step flow from receiving tax documents through filing to a refund or balance due.",
    reviewedDate: "2026-07-10"
  },
  ep10: {
    id: "ep10-total-compensation",
    type: "stacked-bar",
    title: "Salary versus total compensation",
    description: "Two illustrative job offers with the same base salary look identical until benefits are added in.",
    labels: { unit: "$" },
    data: [
      { label: "Offer A", segments: [{ name: "Base salary", value: 48000 }, { name: "Retirement match", value: 1440 }, { name: "Insurance value", value: 3000 }, { name: "Paid leave value", value: 1800 }] },
      { label: "Offer B", segments: [{ name: "Base salary", value: 50000 }, { name: "Retirement match", value: 0 }, { name: "Insurance value", value: 900 }, { name: "Paid leave value", value: 600 }] }
    ],
    assumptions: ["Benefit values are illustrative estimates; actual value depends on personal use and plan design."],
    sourceIds: ["irs-retirement-plans"],
    accessibilitySummary: "Stacked bars comparing two illustrative job offers by base salary, retirement match, insurance value, and paid-leave value.",
    reviewedDate: "2026-07-10"
  },
  ep11: {
    id: "ep11-balance-sheet-bridge",
    type: "bar",
    title: "Assets versus liabilities",
    description: "The illustrative starting balance sheet from this episode: assets and liabilities compared side by side. Net worth here is negative ($1,550 in assets minus $6,580 in liabilities = −$5,030), which is common and not a moral failing.",
    labels: { unit: "$", xAxis: "Category", yAxis: "Total value" },
    data: [
      { label: "Total assets (checking + savings + laptop)", value: 1550 },
      { label: "Total liabilities (student loan + credit card)", value: 6580 }
    ],
    assumptions: ["Illustrative figures only, matching this episode's starting balance sheet example."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "Bar chart comparing $1,550 in total assets to $6,580 in total liabilities, for a net worth of negative $5,030.",
    reviewedDate: "2026-07-10"
  },
  ep12: {
    id: "ep12-liquidity-ladder",
    type: "timeline",
    title: "Liquidity ladder for short-term cash",
    description: "Cash tools trade some access speed for a potentially higher yield. None of these guarantee a specific return.",
    data: [
      { label: "Checking or savings account", value: "Available immediately", description: "Lowest typical yield, full access." },
      { label: "High-yield savings account", value: "Available in 1-2 business days", description: "Often a higher yield than a basic account, still federally insured up to limits." },
      { label: "3-month Treasury bill", value: "Locked about 3 months", description: "Backed by the U.S. government; can be sold early on the secondary market at a possible gain or loss." },
      { label: "6-month certificate of deposit (CD)", value: "Locked about 6 months", description: "Typically an early-withdrawal penalty if accessed before maturity." }
    ],
    assumptions: ["Illustrative access windows and general patterns, not current rates or guarantees."],
    sourceIds: ["fdic-money-smart", "treasurydirect-tbills"],
    accessibilitySummary: "Ordered timeline from immediately accessible checking and savings through a 6-month CD, showing increasing lock-up time.",
    reviewedDate: "2026-07-10"
  },
  ep13: {
    id: "ep13-volatility-illustration",
    type: "bar",
    title: "Illustrative volatility by investment type",
    description: "A relative, illustrative sense of typical price movement — not a prediction for any specific stock, bond, or fund.",
    labels: { unit: "", xAxis: "Investment type", yAxis: "Illustrative volatility (1-10 scale)" },
    data: [
      { label: "Individual company stock", value: 8 },
      { label: "Individual bond", value: 3 },
      { label: "Diversified index fund", value: 5 }
    ],
    assumptions: ["Illustrative relative scale only; this course does not recommend individual securities."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Bar chart placing individual stock, individual bond, and diversified index fund on an illustrative 1-10 volatility scale.",
    reviewedDate: "2026-07-10"
  },
  ep14: {
    id: "ep14-entity-comparison",
    type: "comparison",
    title: "Business entity comparison",
    description: "Illustrative scores comparing common entity types. Actual protection and requirements depend on how the business is run and current state law.",
    labels: { unit: "" },
    data: [
      { label: "Personal liability protection (1-5)", series: [{ name: "Sole proprietorship", value: 1 }, { name: "LLC", value: 4 }, { name: "Corporation", value: 5 }] },
      { label: "Setup complexity (1-5)", series: [{ name: "Sole proprietorship", value: 1 }, { name: "LLC", value: 3 }, { name: "Corporation", value: 5 }] }
    ],
    assumptions: ["Illustrative relative scores, not legal advice.", "Verify current state filing fees and requirements with the Texas Secretary of State or SBA.gov."],
    sourceIds: ["sba-choose-structure"],
    accessibilitySummary: "Comparison of sole proprietorship, LLC, and corporation on illustrative liability-protection and setup-complexity scales.",
    reviewedDate: "2026-07-10"
  },
  ep15: {
    id: "ep15-separation-flow",
    type: "flow",
    title: "Business money-separation flow",
    description: "Where business revenue goes before any of it becomes personal spending money.",
    data: [
      { label: "Revenue arrives", description: "Deposited into a dedicated business account, never a personal one." },
      { label: "Pay business expenses", description: "Supplies, software, contractors, and other operating costs." },
      { label: "Set aside a tax reserve", description: "A portion held back for quarterly estimated taxes." },
      { label: "Pay the owner a set draw or salary", description: "A deliberate transfer, not an ad hoc withdrawal." },
      { label: "Retain remaining cash in the business", description: "Buffer for slow months or reinvestment." }
    ],
    assumptions: ["General illustrative sequence; specific tax reserve percentages vary by income and entity type."],
    sourceIds: ["sba-business-bank-account"],
    accessibilitySummary: "Five-step flow from business revenue through expenses, tax reserve, owner pay, and retained cash.",
    reviewedDate: "2026-07-10"
  },
  ep16: {
    id: "ep16-housing-comparison",
    type: "comparison",
    title: "Housing option comparison",
    description: "Illustrative monthly cost and flexibility scores across three housing paths. No option is universally best.",
    labels: { unit: "$" },
    data: [
      { label: "Illustrative monthly housing cost", series: [{ name: "Renting", value: 1100 }, { name: "Buying (mortgage + tax + insurance)", value: 1450 }, { name: "Shared housing", value: 650 }] }
    ],
    assumptions: ["Illustrative figures; local market data, mortgage rates, and property taxes vary significantly by location."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "Bar comparison of illustrative monthly housing costs across renting, buying, and shared housing.",
    reviewedDate: "2026-07-10"
  },
  ep17: {
    id: "ep17-risk-matrix",
    type: "matrix",
    title: "Insurance risk matrix",
    description: "Insurance is generally most valuable for low-likelihood, high-impact risks — the events that are rare but financially devastating.",
    labels: { xAxis: "Likelihood", yAxis: "Financial impact if it happens", xLevels: ["Lower likelihood", "Higher likelihood"], yLevels: ["Lower impact", "Higher impact"] },
    data: [
      { label: "Lost phone", x: "Higher likelihood", y: "Lower impact" },
      { label: "Minor fender-bender", x: "Higher likelihood", y: "Lower impact" },
      { label: "House or apartment fire", x: "Lower likelihood", y: "Higher impact" },
      { label: "Serious illness or injury", x: "Lower likelihood", y: "Higher impact" }
    ],
    assumptions: ["Illustrative placement; this course does not recommend a specific insurance product."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "2x2 table placing four illustrative risks by likelihood and financial impact, showing insurance targets rare, high-impact events.",
    reviewedDate: "2026-07-10"
  },
  ep18: {
    id: "ep18-shared-money-comparison",
    type: "comparison",
    title: "Joint versus separate account comparison",
    description: "Illustrative scores (1-5) across three common approaches couples and partners use for shared money.",
    labels: { unit: "" },
    data: [
      { label: "Simplicity of shared bill-paying", series: [{ name: "All joint", value: 5 }, { name: "All separate", value: 2 }, { name: "Hybrid (joint + individual)", value: 4 }] },
      { label: "Individual financial independence", series: [{ name: "All joint", value: 1 }, { name: "All separate", value: 5 }, { name: "Hybrid (joint + individual)", value: 4 }] }
    ],
    assumptions: ["Illustrative relative scores; the right approach depends on the specific relationship and goals."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "Comparison of all-joint, all-separate, and hybrid account approaches on illustrative simplicity and independence scales.",
    reviewedDate: "2026-07-10"
  },
  ep19: {
    id: "ep19-wealth-dashboard",
    type: "bar",
    title: "Financial-health dashboard (illustrative example)",
    description: "Net worth is one measure among several. This illustrative dashboard scores six additional dimensions on a 0-100 scale so no single number defines the picture.",
    labels: { unit: "", xAxis: "Dimension", yAxis: "Illustrative score (0-100)" },
    data: [
      { label: "Cash buffer (emergency fund months)", value: 70 },
      { label: "Debt burden (higher = healthier)", value: 55 },
      { label: "Protection (insurance adequacy)", value: 80 },
      { label: "Flexibility", value: 65 },
      { label: "Financial knowledge", value: 75 },
      { label: "Overall wellbeing", value: 72 }
    ],
    assumptions: ["Illustrative example scores, not a diagnostic tool or personalized assessment."],
    sourceIds: ["cfpb-your-money-your-goals"],
    accessibilitySummary: "Bar chart of six illustrative financial-wellbeing dimensions, each scored 0-100, alongside net worth as a separate measure.",
    reviewedDate: "2026-07-10"
  },
  ep20: {
    id: "ep20-road-to-1-5-million",
    type: "stacked-bar",
    title: "Contributions versus estimated growth",
    description: "Under the middle illustration (7% assumed annual return, 0.5% fees, $2,000 starting balance, $400/month for 30 years), most of the ending balance comes from investment growth, not contributions alone.",
    labels: { unit: "$" },
    data: [
      { label: "Middle illustration, 30 years", segments: [{ name: "Total contributions", value: 146000 }, { name: "Estimated growth", value: 310455 }] }
    ],
    assumptions: ["7% assumed annual return, 0.5% annual fees, $2,000 starting balance, $400 monthly contribution, 30 years.", "Illustrative estimate, not a forecast — actual returns, fees, and contributions will differ."],
    sourceIds: ["sec-compound-interest-calc"],
    accessibilitySummary: "Single stacked bar splitting an illustrative $456,455 ending balance into $146,000 of contributions and $310,455 of estimated growth.",
    reviewedDate: "2026-07-10"
  }
};

export const QUEST_VISUALIZATIONS = {
  q01: {
    id: "q01-liquidity-breakdown",
    type: "bar",
    title: "Liquid versus illiquid balance sheet",
    description: "The fictional $1.2 million household from this quest's scenario, broken into how quickly each asset could realistically become spendable cash.",
    labels: { unit: "$", xAxis: "Asset", yAxis: "Value" },
    data: [
      { label: "Checking & savings (liquid)", value: 18000 },
      { label: "Taxable brokerage (semi-liquid, days)", value: 90000 },
      { label: "Business equity (illiquid)", value: 60000 },
      { label: "Home equity (illiquid)", value: 170000 },
      { label: "401(k) (illiquid until retirement)", value: 340000 }
    ],
    assumptions: ["Figures match this quest's fictional household scenario.", "Home equity shown as value minus mortgage ($380,000 − $210,000)."],
    sourceIds: ["frb-scf"],
    accessibilitySummary: "Bar chart ranking a fictional household's assets from most to least liquid: cash, brokerage, business equity, home equity, and retirement accounts.",
    reviewedDate: "2026-07-10"
  },
  q02: {
    id: "q02-income-vs-wealth",
    type: "comparison",
    title: "Same income, different outcomes",
    description: "Two fictional professionals earning the same $180,000 salary, compared by saving rate and illustrative net worth after 15 years.",
    labels: { unit: "$" },
    data: [
      { label: "Annual saving and investing", series: [{ name: "Consistent saver (20%)", value: 36000 }, { name: "Lifestyle spender (~0%)", value: 0 }] },
      { label: "Illustrative net worth after 15 years", series: [{ name: "Consistent saver (20%)", value: 950000 }, { name: "Lifestyle spender (~0%)", value: 60000 }] }
    ],
    assumptions: ["Illustrative estimate assuming a 7% average annual return on invested savings; actual results vary with markets, taxes, and life events."],
    sourceIds: ["frb-scf", "sec-investing-basics"],
    accessibilitySummary: "Comparison of two equally paid fictional professionals by annual saving amount and illustrative 15-year net worth.",
    reviewedDate: "2026-07-10"
  },
  q03: {
    id: "q03-income-shock-timeline",
    type: "timeline",
    title: "A short, high-earning career window",
    description: "Why athletes, entertainers, and creators often plan around a compressed earning period rather than a steady multi-decade income.",
    data: [
      { label: "Years 1-4", value: "Peak income (~$2.4M/yr, illustrative)", description: "The active playing, performing, or high-visibility earning window." },
      { label: "Year 5", value: "Career-ending event", description: "Injury, contract non-renewal, or a platform/trend shift ends peak earning." },
      { label: "Years 5-40", value: "No further peak income", description: "Must rely on savings, a new career, or both." },
      { label: "Retirement", value: "Funded only by what was saved during years 1-4", description: "Unlike a 35-year steady salary, there is no later window to make up for under-saving early." }
    ],
    assumptions: ["Illustrative career pattern; actual career lengths and earnings vary widely by sport, field, and individual."],
    sourceIds: ["bls-ooh"],
    accessibilitySummary: "Timeline showing four peak-earning years followed by 35+ years with no further peak income unless savings were built during the earning window.",
    reviewedDate: "2026-07-10"
  },
  q04: {
    id: "q04-ownership-dilution",
    type: "stacked-bar",
    title: "Founder ownership across funding rounds",
    description: "Raising outside capital grows the company but typically dilutes the founder's ownership percentage.",
    labels: { unit: "%" },
    data: [
      { label: "At founding", segments: [{ name: "Founder", value: 100 }] },
      { label: "After a seed round", segments: [{ name: "Founder", value: 75 }, { name: "Seed investors", value: 25 }] },
      { label: "After a Series A round", segments: [{ name: "Founder", value: 55 }, { name: "Seed investors", value: 18 }, { name: "Series A investors", value: 27 }] }
    ],
    assumptions: ["Illustrative dilution pattern; real rounds vary widely in size and terms."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Stacked bars showing founder ownership shrinking from 100% at founding to 55% after two funding rounds, as investors take equity stakes.",
    reviewedDate: "2026-07-10"
  },
  q05: {
    id: "q05-adviser-role-map",
    type: "flow",
    title: "Professional adviser role map",
    description: "Different professionals play different, non-overlapping roles. No single adviser replaces the owner's final judgment.",
    data: [
      { label: "CPA", description: "Tax filing, bookkeeping oversight, and compliance." },
      { label: "Estate attorney", description: "Wills, trusts, and account titling." },
      { label: "Financial planner", description: "Goals-based planning across the full financial picture." },
      { label: "Investment adviser", description: "Portfolio construction and ongoing management." },
      { label: "The individual", description: "Reviews recommendations and makes the final decision." }
    ],
    assumptions: ["Illustrative role map; verify credentials and licensing for any real professional before engaging them."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Flow diagram of five professional roles — CPA, estate attorney, financial planner, investment adviser, and the individual — ending in the individual's final decision.",
    reviewedDate: "2026-07-10"
  },
  q06: {
    id: "q06-private-banking-comparison",
    type: "comparison",
    title: "Retail versus private banking",
    description: "Private banking is a service tier, not a guarantee of better returns or safety.",
    labels: { unit: "$" },
    data: [
      { label: "Illustrative minimum relationship assets", series: [{ name: "Retail bank", value: 0 }, { name: "Private bank", value: 1000000 }] }
    ],
    assumptions: ["Illustrative figures; actual minimums, fees, and services vary by institution and change over time."],
    sourceIds: ["fdic-money-smart"],
    accessibilitySummary: "Comparison bar showing an illustrative $0 minimum for a retail bank versus $1,000,000 for a private banking relationship.",
    reviewedDate: "2026-07-10"
  },
  q07: {
    id: "q07-investment-policy-flow",
    type: "flow",
    title: "Building an investment policy",
    description: "A documented decision system, built before emotions get involved in a market swing.",
    data: [
      { label: "Define goals and time horizon", description: "What the money is for, and when it's needed." },
      { label: "Set target asset allocation", description: "A written mix of stocks, bonds, and other assets." },
      { label: "Set rebalancing rules", description: "When and how to return to the target mix." },
      { label: "Set rules for market swings", description: "Decided in advance, not improvised during a downturn." },
      { label: "Review on a set schedule", description: "Typically annually, or after a major life change." }
    ],
    assumptions: ["Illustrative planning sequence, not individualized investment advice."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Five-step flow for building a written investment policy from goal-setting through scheduled review.",
    reviewedDate: "2026-07-10"
  },
  q08: {
    id: "q08-illiquidity-ladder",
    type: "timeline",
    title: "Private-investment liquidity ladder",
    description: "Private investments trade potential return for a much longer, less certain path back to cash than public markets.",
    data: [
      { label: "Publicly traded stock", value: "Seconds to days", description: "Can typically be sold on a public exchange almost immediately." },
      { label: "Real estate", value: "Weeks to months", description: "Selling involves listing, closing, and transaction costs." },
      { label: "Private equity fund", value: "Typically 7-10 years", description: "Capital is committed and generally can't be withdrawn on demand." },
      { label: "Venture capital stake", value: "10+ years, or never", description: "Many startups never provide an exit for early investors." }
    ],
    assumptions: ["Illustrative typical timeframes; actual terms vary by fund and investment."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Timeline from publicly traded stock (seconds to days) to venture capital (10+ years or never) showing increasing illiquidity.",
    reviewedDate: "2026-07-10"
  },
  q09: {
    id: "q09-multi-entity-tax-flow",
    type: "flow",
    title: "Multi-entity tax-record flow",
    description: "Multiple income sources and business entities multiply the recordkeeping, not just the paperwork volume.",
    data: [
      { label: "Track income by entity and source", description: "W-2, 1099, K-1, and business revenue kept separate." },
      { label: "Separate business and personal records", description: "Distinct accounts and books for each entity." },
      { label: "Apply correct entity tax treatment", description: "Sole proprietorship, LLC, S-corp, and C-corp are taxed differently." },
      { label: "File multiple returns and schedules", description: "Personal and one or more business/entity filings." },
      { label: "Retain records for the required period", description: "Available if the IRS or a state authority requests them." }
    ],
    assumptions: ["General illustrative sequence, not individualized tax advice."],
    sourceIds: ["irs-retirement-plans", "sba-choose-structure"],
    accessibilitySummary: "Five-step flow showing how multiple income entities multiply tax recordkeeping and filing steps.",
    reviewedDate: "2026-07-10"
  },
  q10: {
    id: "q10-estate-beneficiary-flow",
    type: "flow",
    title: "Estate and beneficiary flow",
    description: "How assets typically pass to the next generation, and why beneficiary designations often matter more than the will itself.",
    data: [
      { label: "Will or trust is drafted", description: "States overall wishes for asset distribution." },
      { label: "Beneficiary designations updated", description: "Retirement accounts and life insurance pass by designation, not the will." },
      { label: "Assets pass per designation or probate", description: "Designated accounts bypass probate; everything else may not." },
      { label: "Executor or trustee administers the estate", description: "Pays debts and taxes, then distributes remaining assets." },
      { label: "Beneficiaries receive assets", description: "Possibly after estate-tax or income-tax steps, depending on asset type." }
    ],
    assumptions: ["General illustrative sequence, not individualized legal or tax advice.", "Rules vary by state and change over time."],
    sourceIds: ["irs-retirement-plans"],
    accessibilitySummary: "Five-step flow from drafting a will through beneficiaries receiving assets, highlighting the role of beneficiary designations.",
    reviewedDate: "2026-07-10"
  },
  q11: {
    id: "q11-complexity-matrix",
    type: "matrix",
    title: "When complexity justifies a family office",
    description: "A family office tends to make sense only when both net worth and the complexity of holdings are high.",
    labels: { xAxis: "Net worth tier", yAxis: "Complexity of holdings", xLevels: ["Lower tier", "Higher tier"], yLevels: ["Lower complexity", "Higher complexity"] },
    data: [
      { label: "Single investment account", x: "Lower tier", y: "Lower complexity" },
      { label: "One business plus a home", x: "Lower tier", y: "Higher complexity" },
      { label: "Diversified public portfolio", x: "Higher tier", y: "Lower complexity" },
      { label: "Multiple businesses, real estate, and trusts", x: "Higher tier", y: "Higher complexity" }
    ],
    assumptions: ["Illustrative placement, not a formula for any individual family's decision."],
    sourceIds: ["frb-scf"],
    accessibilitySummary: "2x2 table placing four illustrative holding types by net worth tier and complexity, showing family offices fit the high/high quadrant.",
    reviewedDate: "2026-07-10"
  },
  q12: {
    id: "q12-governance-flow",
    type: "flow",
    title: "Governance prevents expensive confusion",
    description: "Written rules, applied consistently, are what keep small disagreements from becoming costly disputes.",
    data: [
      { label: "Written approval policy", description: "Spending thresholds documented in advance, not decided in the moment." },
      { label: "Dual sign-off above a threshold", description: "No single person can authorize a large expense alone." },
      { label: "Regular financial reporting", description: "Every stakeholder sees the same numbers on a set schedule." },
      { label: "Independent review", description: "An outside party checks the books periodically." },
      { label: "Fewer costly disputes", description: "Disagreements resolve against a written record instead of memory." }
    ],
    assumptions: ["Illustrative governance sequence; specific controls vary by organization size and structure."],
    sourceIds: ["sba-choose-structure"],
    accessibilitySummary: "Five-step flow from a written approval policy through independent review, ending in fewer costly disputes.",
    reviewedDate: "2026-07-10"
  },
  q13: {
    id: "q13-concentration-risk",
    type: "bar",
    title: "Portfolio concentration, illustrative example",
    description: "Holding most of a portfolio in one company's stock ties personal wealth directly to that one company's fortunes.",
    labels: { unit: "%", xAxis: "Holding", yAxis: "Share of illustrative portfolio" },
    data: [
      { label: "Single employer's stock", value: 80 },
      { label: "Everything else, diversified", value: 20 }
    ],
    assumptions: ["Illustrative example; concentration levels vary widely by individual circumstance."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Bar chart showing an illustrative portfolio that is 80% concentrated in one company's stock and 20% diversified elsewhere.",
    reviewedDate: "2026-07-10"
  },
  q14: {
    id: "q14-margin-call-stress-test",
    type: "flow",
    title: "Borrowing-against-assets stress test",
    description: "A market decline can turn a comfortable loan-to-value ratio into a forced sale, even without any new borrowing.",
    data: [
      { label: "Portfolio value: $1,000,000", description: "Borrow $400,000 against it — a 40% loan-to-value ratio." },
      { label: "Market drops 30%", description: "Portfolio value falls to $700,000; the $400,000 loan hasn't changed." },
      { label: "Loan-to-value rises to about 57%", description: "How close this comes to triggering a margin call depends on that specific lender's maintenance requirement — try the calculator below with different assumptions." },
      { label: "Margin call, if the threshold is crossed", description: "The borrower must deposit more cash or collateral, or the lender sells assets — often at the worst possible time." }
    ],
    assumptions: ["Illustrative numbers; actual lender maintenance requirements and margin rates vary and change over time."],
    sourceIds: ["sec-investing-basics", "finra-margin"],
    accessibilitySummary: "Four-step stress test showing how a 30% market decline turns a 40% loan-to-value ratio into a margin call.",
    reviewedDate: "2026-07-10"
  },
  q15: {
    id: "q15-visibility-security-matrix",
    type: "matrix",
    title: "Visibility and security risk matrix",
    description: "As public visibility rises, so does the practical importance of security and communications planning.",
    labels: { xAxis: "Public visibility", yAxis: "Security and reputational risk", xLevels: ["Lower visibility", "Higher visibility"], yLevels: ["Lower risk", "Higher risk"] },
    data: [
      { label: "Private local business owner", x: "Lower visibility", y: "Lower risk" },
      { label: "Regional media-covered founder", x: "Higher visibility", y: "Lower risk" },
      { label: "National public figure", x: "Higher visibility", y: "Higher risk" }
    ],
    assumptions: ["Illustrative placement; actual risk depends on many individual factors."],
    sourceIds: ["frb-scf"],
    accessibilitySummary: "2x2 table placing three illustrative examples by public visibility and security/reputational risk.",
    reviewedDate: "2026-07-10"
  },
  q16: {
    id: "q16-ownership-vs-cash",
    type: "bar",
    title: "Ownership versus cash, illustrative billionaire example",
    description: "A headline net-worth figure is almost always dominated by unrealized stock value, not spendable cash.",
    labels: { unit: "$", xAxis: "Component", yAxis: "Illustrative value" },
    data: [
      { label: "Company stock (unrealized)", value: 9800000000 },
      { label: "Cash and liquid assets", value: 150000000 }
    ],
    assumptions: ["Illustrative fictional figures for teaching purposes, not any real person's finances."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Bar chart showing an illustrative $9.8 billion in company stock against $150 million in cash and liquid assets.",
    reviewedDate: "2026-07-10"
  },
  q17: {
    id: "q17-ownership-vs-control",
    type: "comparison",
    title: "Economic ownership versus voting control",
    description: "Dual-class share structures can let a founder keep majority control with a minority economic stake.",
    labels: { unit: "%" },
    data: [
      { label: "Illustrative example", series: [{ name: "Founder economic ownership", value: 20 }, { name: "Founder voting control", value: 60 }, { name: "Public shareholders' economic ownership", value: 80 }] }
    ],
    assumptions: ["Illustrative dual-class structure; actual structures vary by company and change at IPO or later."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "Comparison showing an illustrative founder holding 20% economic ownership but 60% voting control, versus public shareholders' 80% economic ownership.",
    reviewedDate: "2026-07-10"
  },
  q18: {
    id: "q18-stakeholder-map",
    type: "matrix",
    title: "Stakeholder power-interest map",
    description: "Different stakeholders hold different levels of interest in, and power over, a large organization's decisions.",
    labels: { xAxis: "Interest in the outcome", yAxis: "Power to influence it", xLevels: ["Lower interest", "Higher interest"], yLevels: ["Lower power", "Higher power"] },
    data: [
      { label: "Employees", x: "Higher interest", y: "Lower power" },
      { label: "Regulators", x: "Lower interest", y: "Higher power" },
      { label: "Shareholders", x: "Higher interest", y: "Higher power" },
      { label: "Local community", x: "Higher interest", y: "Lower power" }
    ],
    assumptions: ["Illustrative placement; actual power and interest vary by organization and issue."],
    sourceIds: ["sec-investing-basics"],
    accessibilitySummary: "2x2 table placing employees, regulators, shareholders, and the local community by interest and power over organizational decisions.",
    reviewedDate: "2026-07-10"
  },
  q19: {
    id: "q19-philanthropy-flow",
    type: "flow",
    title: "Philanthropy and power flow",
    description: "Giving is powerful, but the path from wealth to community impact runs through decisions made by a small group of people.",
    data: [
      { label: "Wealth is generated", description: "Typically through business ownership or investment gains." },
      { label: "A portion is directed to giving", description: "Through a foundation, donor-advised fund, or direct gifts." },
      { label: "A board sets grant priorities", description: "Decisions are usually made by a small group, not the public." },
      { label: "Grants are distributed", description: "To selected organizations and causes." },
      { label: "Community impact and voice", description: "The open question: who decided the priorities, and who did not get a say?" }
    ],
    assumptions: ["Illustrative general sequence; actual governance varies by foundation and jurisdiction."],
    sourceIds: ["irs-retirement-plans"],
    accessibilitySummary: "Five-step flow from wealth generation through grant distribution, ending in a question about community voice.",
    reviewedDate: "2026-07-10"
  },
  q20: {
    id: "q20-boardroom-dashboard",
    type: "bar",
    title: "Systems scoring dashboard, illustrative example",
    description: "The final simulation scores decisions across eight dimensions — not just money retained.",
    labels: { unit: "", xAxis: "Dimension", yAxis: "Illustrative example score (0-5)" },
    data: [
      { label: "Evidence use", value: 4 },
      { label: "Liquidity", value: 3 },
      { label: "Risk awareness", value: 4 },
      { label: "Governance", value: 5 },
      { label: "Integrity", value: 4 },
      { label: "Stakeholders", value: 3 },
      { label: "Long-term thinking", value: 4 },
      { label: "Adaptability", value: 3 }
    ],
    assumptions: ["Illustrative example scores for one possible path through the simulation, not a required outcome."],
    sourceIds: ["frb-scf"],
    accessibilitySummary: "Bar chart of eight illustrative scoring dimensions for the final boardroom simulation, each scored 0-5.",
    reviewedDate: "2026-07-10"
  }
};

export function getVisualizationForEpisode(episodeId) {
  return EPISODE_VISUALIZATIONS[episodeId] || null;
}

export function getVisualizationForQuest(questId) {
  return QUEST_VISUALIZATIONS[questId] || null;
}
