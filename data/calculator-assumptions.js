// Ram Ready Financial Futures — Central Illustrative Assumptions
//
// All dollar figures, rates, and limits below are ILLUSTRATIVE EXAMPLES for
// an educational simulation, not current facts, forecasts, or advice.
// Anything that changes with law, policy, or markets is labeled and linked
// to an authoritative source for verification. See docs/SOURCE_POLICY.md.

export const ASSUMPTIONS_REVIEWED_DATE = "2026-07-10";

export const ILLUSTRATIVE_NOTE =
  "Illustrative estimate, not a forecast. Actual taxes, returns, job changes, emergencies, market conditions, fees, and inflation can materially change real-world results.";

export const GROWTH_ILLUSTRATIONS = {
  lower: {
    id: "lower-growth",
    label: "Lower-growth illustration",
    annualReturnPct: 4,
    description: "A more conservative assumption with a lower assumed annual return and room for at least one income interruption."
  },
  middle: {
    id: "middle-growth",
    label: "Middle illustration",
    annualReturnPct: 7,
    description: "A middle-of-the-road assumption often used in long-horizon illustrations, with no guarantee it will match any individual's real results."
  },
  higher: {
    id: "higher-growth",
    label: "Higher-growth illustration",
    annualReturnPct: 9,
    description: "A more optimistic assumption with fewer interruptions — shown to illustrate a range, not to suggest this is the likely or recommended outcome."
  }
};

export const DEFAULT_SIMULATOR_ASSUMPTIONS = {
  startingBalance: 0,
  monthlyContribution: 250,
  years: 30,
  assumedAnnualReturnPct: 7,
  feesPct: 0.5,
  inflationPct: 2.5,
  incomeGrowthPct: 2,
  savingsRatePct: 10,
  debtInterestPct: 18,
  interruptionMonths: 0
};

export const EMERGENCY_FUND_RANGE_MONTHS = { min: 3, max: 6 };

export const CALCULATOR_META = {
  netWorth: {
    id: "net-worth",
    label: "Net-Worth Calculator",
    formula: "Net worth = Total assets − Total liabilities",
    sourceIds: ["frb-scf"]
  },
  cashFlow: {
    id: "cash-flow",
    label: "Cash-Flow Calculator",
    formula: "Monthly cash flow = Income − (Fixed + Variable + Periodic ÷ 12 + Debt payments)",
    sourceIds: ["cfpb-your-money-your-goals"]
  },
  debtPayoff: {
    id: "debt-payoff",
    label: "Debt Payoff Comparison",
    formula: "Compares total interest and payoff time across different fixed monthly payments using standard amortization.",
    sourceIds: ["cfpb-credit-reports-scores"]
  },
  aprTotalCost: {
    id: "apr-total-cost",
    label: "APR and Total-Cost Example",
    formula: "Total cost = Principal + Sum of periodic interest charges over the repayment term",
    sourceIds: ["cfpb-credit-reports-scores"]
  },
  emergencyFund: {
    id: "emergency-fund",
    label: "Emergency-Fund Range",
    formula: "Suggested range = Essential monthly expenses × 3 to 6 months",
    sourceIds: ["fdic-money-smart"]
  },
  compoundGrowth: {
    id: "compound-growth",
    label: "Compound-Growth Calculator",
    formula: "Future value = Σ (contribution compounded monthly at the assumed annual return, minus fees)",
    sourceIds: ["sec-compound-interest-calc"]
  },
  inflationAdjusted: {
    id: "inflation-adjusted",
    label: "Inflation-Adjusted Value",
    formula: "Real value = Nominal value ÷ (1 + assumed inflation rate) ^ years",
    sourceIds: ["sec-investing-basics"]
  },
  feeImpact: {
    id: "fee-impact",
    label: "Fee Impact Calculator",
    formula: "Compares ending balance at the same assumed return with different annual fee percentages.",
    sourceIds: ["sec-investing-basics"]
  },
  salaryVsTotalComp: {
    id: "salary-vs-total-comp",
    label: "Salary vs. Total Compensation Comparison",
    formula: "Total compensation = Salary + Estimated benefit value (retirement match + insurance + paid leave, illustrative)",
    sourceIds: ["irs-retirement-plans"]
  },
  roadTo1_5Million: {
    id: "road-to-1-5-million",
    label: "Road-to-$1.5-Million Scenario Builder",
    formula: "Projects account balance across selected years using the compound-growth formula under three named illustration cases.",
    sourceIds: ["sec-compound-interest-calc", "frb-scf"]
  },
  bankFeeAnnualCost: {
    id: "bank-fee-annual-cost",
    label: "Bank-Fee Annual-Cost Calculator",
    formula: "Annual fee cost = (Monthly maintenance fee x 12) + (Overdraft fee x expected overdrafts per year) + Other annual fees",
    sourceIds: ["cfpb-bank-accounts", "fdic-money-smart"]
  },
  transportationTotalCost: {
    id: "transportation-total-cost",
    label: "Transportation Total-Cost Calculator",
    formula: "Monthly total cost = Loan or lease payment + Insurance + Fuel or fares + Maintenance (averaged)",
    sourceIds: ["cfpb-your-money-your-goals"]
  },
  debtAvalancheSnowball: {
    id: "debt-avalanche-snowball",
    label: "Debt Avalanche vs. Snowball Comparison",
    formula: "Simulates paying minimums on every balance while directing extra payment to either the highest-APR balance (avalanche) or the lowest-balance debt (snowball) first.",
    sourceIds: ["cfpb-credit-reports-scores"]
  },
  marginCallStressTest: {
    id: "margin-call-stress-test",
    label: "Borrowing-Against-Assets Stress Test",
    formula: "Loan-to-value = Loan amount ÷ Portfolio value after an assumed market decline; a margin call occurs when remaining equity falls below the lender's maintenance requirement.",
    sourceIds: ["finra-margin", "sec-investing-basics"]
  }
};
