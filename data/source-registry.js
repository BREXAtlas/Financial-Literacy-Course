// Ram Ready Financial Futures — Centralized Source Registry
// Every episode and quest references sources by id. See docs/SOURCE_POLICY.md
// and docs/SOURCE_REVIEW_CHECKLIST.md for how this list is maintained.
//
// classification: "primary" (government/regulatory/original data) or
//                 "secondary" (explainer, educational summary)

export const SOURCE_REGISTRY = [
  {
    id: "asu-core-values",
    title: "Angelo State University Core Values",
    org: "Angelo State University",
    url: "https://www.angelo.edu/about-asu/core-values/",
    topic: "Institutional identity",
    concepts: ["belonging", "community", "integrity"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Used only for identity/branding context, not financial fact claims."
  },
  {
    id: "asu-blue-gold",
    title: "Blue and Gold — Angelo State Traditions",
    org: "Angelo State University",
    url: "https://www.angelo.edu/about-asu/traditions/blue-and-gold.php",
    topic: "Institutional identity",
    concepts: ["ram fam", "school color heritage"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Design-direction reference only."
  },
  {
    id: "asu-roscoe-bella",
    title: "Roscoe and Bella — Angelo State Traditions",
    org: "Angelo State University",
    url: "https://www.angelo.edu/about-asu/traditions/roscoe-and-bella.php",
    topic: "Institutional identity",
    concepts: ["mascot tradition", "guide characters"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Guide characters are original text-based interface treatments, not official university speech."
  },
  {
    id: "cfpb-bank-accounts",
    title: "Bank Accounts — Consumer Tools",
    org: "Consumer Financial Protection Bureau",
    url: "https://www.consumerfinance.gov/consumer-tools/bank-accounts/",
    topic: "Banking",
    concepts: ["checking", "savings", "fees", "overdraft"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "cfpb-credit-reports-scores",
    title: "Credit Reports and Scores",
    org: "Consumer Financial Protection Bureau",
    url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/",
    topic: "Credit",
    concepts: ["credit score", "credit report", "utilization", "payment history"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "cfpb-debt-collection",
    title: "Debt Collection",
    org: "Consumer Financial Protection Bureau",
    url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/",
    topic: "Credit and debt",
    concepts: ["collections", "missed payments", "consumer rights"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "cfpb-your-money-your-goals",
    title: "Your Money, Your Goals (Educator Tools)",
    org: "Consumer Financial Protection Bureau",
    url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/",
    topic: "Financial education",
    concepts: ["budgeting", "goal setting", "financial capability"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "fdic-money-smart",
    title: "Money Smart for Adults",
    org: "Federal Deposit Insurance Corporation",
    url: "https://www.fdic.gov/consumer-resource-center/money-smart-adults",
    topic: "Financial education",
    concepts: ["budgeting", "banking", "credit", "saving"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "fdic-deposit-insurance",
    title: "Deposit Insurance",
    org: "Federal Deposit Insurance Corporation",
    url: "https://www.fdic.gov/resources/deposit-insurance/",
    topic: "Banking",
    concepts: ["FDIC insurance", "insured limits", "bank safety"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "ncua-share-insurance",
    title: "Share Insurance Fund",
    org: "National Credit Union Administration",
    url: "https://ncua.gov/support-services/share-insurance-fund",
    topic: "Banking",
    concepts: ["NCUA insurance", "credit unions"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "irs-filing",
    title: "Filing",
    org: "Internal Revenue Service",
    url: "https://www.irs.gov/filing",
    topic: "Taxes",
    concepts: ["tax filing", "deadlines", "filing status"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Rates, brackets, and deduction amounts change yearly — treat as illustrative and link out."
  },
  {
    id: "irs-form-w2",
    title: "About Form W-2",
    org: "Internal Revenue Service",
    url: "https://www.irs.gov/forms-pubs/about-form-w-2",
    topic: "Taxes and payroll",
    concepts: ["W-2", "wage reporting"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "irs-form-w4",
    title: "About Form W-4",
    org: "Internal Revenue Service",
    url: "https://www.irs.gov/forms-pubs/about-form-w-4",
    topic: "Taxes and payroll",
    concepts: ["withholding", "W-4"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "irs-retirement-plans",
    title: "Retirement Plans",
    org: "Internal Revenue Service",
    url: "https://www.irs.gov/retirement-plans",
    topic: "Retirement",
    concepts: ["401(k)", "IRA", "contribution limits", "employer plans"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Contribution limits change yearly — treat as illustrative."
  },
  {
    id: "irs-estate-gift-tax",
    title: "Estate and Gift Taxes",
    org: "Internal Revenue Service",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/estate-and-gift-taxes",
    topic: "Estate planning",
    concepts: ["estate tax", "gift tax", "exclusions"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Exclusion amounts change — treat as illustrative."
  },
  {
    id: "irs-llc",
    title: "Limited Liability Company (LLC)",
    org: "Internal Revenue Service",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc",
    topic: "Business structures",
    concepts: ["LLC", "entity tax treatment"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sba-choose-structure",
    title: "Choose a Business Structure",
    org: "U.S. Small Business Administration",
    url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure",
    topic: "Business structures",
    concepts: ["sole proprietorship", "partnership", "LLC", "corporation"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sba-business-bank-account",
    title: "Open a Business Bank Account",
    org: "U.S. Small Business Administration",
    url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account",
    topic: "Business banking",
    concepts: ["business accounts", "commingling funds"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "tx-sos-business-structure",
    title: "Business Structures",
    org: "Texas Secretary of State",
    url: "https://www.sos.state.tx.us/corp/businessstructure.shtml",
    topic: "Business structures (Texas)",
    concepts: ["state registration", "entity filing"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "tx-comptroller-franchise-tax",
    title: "Franchise Tax",
    org: "Texas Comptroller of Public Accounts",
    url: "https://comptroller.texas.gov/taxes/franchise/",
    topic: "Business taxes (Texas)",
    concepts: ["franchise tax", "state business tax"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sec-investing-basics",
    title: "Investing Basics",
    org: "U.S. Securities and Exchange Commission (Investor.gov)",
    url: "https://www.investor.gov/introduction-investing/investing-basics",
    topic: "Investing",
    concepts: ["risk", "diversification", "time horizon"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sec-stocks",
    title: "Stocks",
    org: "U.S. Securities and Exchange Commission (Investor.gov)",
    url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks",
    topic: "Investing",
    concepts: ["equity ownership", "dividends", "volatility"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sec-compound-interest-calc",
    title: "Compound Interest Calculator",
    org: "U.S. Securities and Exchange Commission (Investor.gov)",
    url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
    topic: "Investing",
    concepts: ["compound growth", "time value of money"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "treasurydirect-tbills",
    title: "Treasury Bills",
    org: "TreasuryDirect, U.S. Department of the Treasury",
    url: "https://www.treasurydirect.gov/marketable-securities/treasury-bills/",
    topic: "Investing",
    concepts: ["treasury bills", "short-term government debt"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "studentaid-repayment",
    title: "Loan Repayment",
    org: "Federal Student Aid, U.S. Department of Education",
    url: "https://studentaid.gov/manage-loans/repayment",
    topic: "Education financing",
    concepts: ["student loans", "repayment plans"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "bls-ooh",
    title: "Occupational Outlook Handbook",
    org: "U.S. Bureau of Labor Statistics",
    url: "https://www.bls.gov/ooh/",
    topic: "Careers",
    concepts: ["career earnings ranges", "job outlook"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Earnings figures are ranges and estimates, not guarantees, and change over time."
  },
  {
    id: "frb-scf",
    title: "Survey of Consumer Finances",
    org: "Federal Reserve",
    url: "https://www.federalreserve.gov/econres/scfindex.htm",
    topic: "Wealth data",
    concepts: ["net worth distribution", "household wealth"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sec-working-with-professional",
    title: "Working With an Investment Professional",
    org: "U.S. Securities and Exchange Commission (Investor.gov)",
    url: "https://www.investor.gov/introduction-investing/getting-started/working-investment-professional",
    topic: "Professional verification",
    concepts: ["fiduciary duty", "advisor credentials"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "finra-brokercheck",
    title: "BrokerCheck",
    org: "Financial Industry Regulatory Authority",
    url: "https://brokercheck.finra.org/",
    topic: "Professional verification",
    concepts: ["broker background check", "disciplinary history"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sec-adviser-info",
    title: "Investment Adviser Public Disclosure",
    org: "U.S. Securities and Exchange Commission",
    url: "https://adviserinfo.sec.gov/",
    topic: "Professional verification",
    concepts: ["adviser background check", "Form ADV"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "fdic-bankfind",
    title: "BankFind Suite",
    org: "Federal Deposit Insurance Corporation",
    url: "https://banks.data.fdic.gov/bankfind-suite/bankfind",
    topic: "Professional verification",
    concepts: ["bank charter verification", "institution lookup"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "sipc-protection",
    title: "What SIPC Protects",
    org: "Securities Investor Protection Corporation",
    url: "https://www.sipc.org/for-investors/what-sipc-protects",
    topic: "Investing protections",
    concepts: ["brokerage account protection", "SIPC coverage limits"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "finra-margin",
    title: "Margin Accounts",
    org: "Financial Industry Regulatory Authority",
    url: "https://www.finra.org/investors/investing/investment-accounts/margin-accounts",
    topic: "Borrowing against investments",
    concepts: ["margin call", "loan-to-value", "collateral", "forced sale"],
    classification: "primary",
    reviewed: "2026-07-10"
  }
];

export function getSourceById(id) {
  return SOURCE_REGISTRY.find((s) => s.id === id) || null;
}

export function getSourcesByIds(ids = []) {
  return ids.map(getSourceById).filter(Boolean);
}
