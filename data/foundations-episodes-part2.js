// Ram Ready Financial Futures — Financial Foundations Story, Episodes 11-20
// Act III (Building Assets and Options): episodes 11-16
// Act IV (Protecting and Sustaining the Plan): episodes 17-20
// See docs/STORY_ARCHITECTURE.md and docs/CURRICULUM_MAP.md.

export const EPISODES_PART2 = [
  {
    id: "ep11",
    act: 3,
    title: "What You Own and What You Owe",
    subtitle: "Assets, liabilities, and the beginning of a real balance sheet",
    estimatedMinutes: 14,
    learningObjectives: [
      "Distinguish assets, liabilities, debt, and equity",
      "Calculate net worth and explain how it differs from cash flow",
      "Recognize that an asset can still create ongoing expenses",
      "Explain why debt that supports an asset can still increase risk"
    ],
    openingNarrative: "{{name}} has been tracking money coming in and going out for a while now, but {{subject}} realizes {{subject}} has never once added up everything {{subject}} owns against everything {{subject}} owes.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt: "{{name}} is asked to build a first-pass personal balance sheet using a checking account balance, an old laptop, a small student loan balance, and a credit card balance. How should {{subject}} categorize each item?",
      type: "read_balance_sheet"
    },
    balanceSheetExample: {
      label: "Illustrative starting balance sheet",
      assets: [
        { label: "Checking account", value: 850 },
        { label: "Savings account", value: 400 },
        { label: "Laptop (resale value estimate)", value: 300 }
      ],
      liabilities: [
        { label: "Student loan balance", value: 6200 },
        { label: "Credit card balance", value: 380 }
      ],
      netWorth: -5030,
      note: "Illustrative figures only. A negative net worth early in life is common and not a moral failing — it is a starting point to track from."
    },
    choices: [
      {
        id: "a",
        text: "List the laptop at its original purchase price",
        whyChosen: "It feels more accurate to use what was paid for it.",
        possibleBenefit: "Simple to calculate without research.",
        possibleCost: "Overstates the balance sheet, since assets are typically valued at current worth, not purchase price.",
        possibleRisk: "A false sense of financial cushion if the learner needed to sell it quickly.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Future balance sheets stay inflated until corrected.",
        whatCouldChangeThisOutcome: "Adopting current resale value as the standard going forward.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "b",
        text: "List the laptop at a realistic current resale value",
        whyChosen: "Matches how most personal balance sheets are actually built.",
        possibleBenefit: "A more honest and useful net worth figure.",
        possibleCost: "Requires a bit of research or estimation effort.",
        possibleRisk: "None significant, though estimates can still be imprecise.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "Sets a habit of realistic asset valuation for future tracking.",
        whatCouldChangeThisOutcome: "Using an online resale marketplace to sanity-check the estimate.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Leave the laptop off the balance sheet entirely",
        whyChosen: "It doesn't feel like a 'real' financial asset.",
        possibleBenefit: "Simpler list with fewer judgment calls.",
        possibleCost: "Understates total assets, even if modestly.",
        possibleRisk: "Minor — the amount involved is usually small relative to other assets.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Habit of omitting small physical assets may compound as asset values grow.",
        whatCouldChangeThisOutcome: "Including all assets above a small materiality threshold.",
        sourceIds: ["cfpb-your-money-your-goals"]
      }
    ],
    immediateConsequences: {
      a: "The balance sheet shows a higher asset value than the laptop could actually be sold for today.",
      b: "The balance sheet reflects a defensible, realistic snapshot of net worth.",
      c: "The balance sheet slightly understates total assets."
    },
    oneYearConsequences: {
      a: "If {{name}} needed to sell the laptop in an emergency, the real cash received would fall short of the recorded value.",
      b: "{{name}} can compare this balance sheet to next year's using a consistent, honest method.",
      c: "The gap is small, but the habit of excluding legitimate assets could extend to more important ones later."
    },
    longTermConsequences: {
      a: "Chronically overstating assets can create a false sense of security when making borrowing or spending decisions.",
      b: "Realistic valuation becomes a durable habit that supports every future financial decision.",
      c: "Undercounting assets over many years can understate genuine progress and discourage the learner unnecessarily."
    },
    recoveryPath: "Any balance sheet can be corrected the next time it's updated — there is no penalty for revising a valuation method once a more accurate one is understood.",
    conceptExplanation: {
      what: "An asset is something owned with value; a liability is something owed. Net worth equals total assets minus total liabilities. Equity is the ownership value remaining in an asset after subtracting any debt against it.",
      why: "Net worth gives a snapshot of financial position at a point in time, complementing cash flow, which measures movement of money over a period.",
      how: "List all assets at realistic current value, list all liabilities at current balance owed, and subtract.",
      cost: "Building an accurate balance sheet takes time and occasional research into current values.",
      risks: "A balance sheet can mislead if assets are overvalued or debts are omitted.",
      whoMayBenefit: "Anyone who wants an honest, trackable measure of financial position over time.",
      whoMayNotBenefit: "Someone in acute financial crisis may find net-worth tracking less urgent than immediate cash-flow survival.",
      misunderstandingRisk: "Assuming a high net worth means high cash on hand, or that a negative net worth early in adulthood is unusual or shameful.",
      verifyNote: "Consult current CFPB financial-planning tools for updated worksheets and definitions."
    },
    realWorldExample: "Reagan, a fictional recent graduate, has $2,000 in savings, a 10-year-old car worth $4,000, and $28,000 in student loans. Reagan's net worth is negative, even though there is income and a car — a common and temporary starting position for many young adults. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which formula correctly defines net worth?",
        type: "multiple_choice",
        options: ["Assets minus liabilities", "Income minus expenses", "Cash minus debt payments", "Assets plus liabilities"],
        correctAnswer: "Assets minus liabilities",
        explanation: "Net worth is a snapshot of total ownership value minus total amounts owed, distinct from cash flow, which tracks money movement over time."
      },
      {
        id: "kc2",
        question: "Why might an asset still create ongoing expenses?",
        type: "multiple_choice",
        options: [
          "Assets never create expenses",
          "A car or home, for example, requires maintenance, insurance, and taxes even though it holds value",
          "Only liabilities create expenses",
          "Expenses only come from debt"
        ],
        correctAnswer: "A car or home, for example, requires maintenance, insurance, and taxes even though it holds value",
        explanation: "Owning an asset like a car or a house typically comes with recurring costs that are separate from the asset's value."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals", "fdic-money-smart"],
    achievementId: "balance-sheet-builder",
    unlocks: "ep12",
    accessibilitySummary: "Balance sheet presented as an accessible structured list with labeled totals, not solely a visual chart.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep12",
    act: 3,
    title: "Cash Tools—Savings, CDs, and Treasury Bills",
    subtitle: "Where short-term money can sit, and what each option actually promises",
    estimatedMinutes: 13,
    learningObjectives: [
      "Compare savings accounts, CDs, and Treasury bills for short-term cash",
      "Explain liquidity, maturity, and early withdrawal penalties",
      "Distinguish nominal return from inflation-adjusted real return",
      "Explain why no cash tool is risk-free in every sense"
    ],
    personalizationSlots: ["ep12.risk_context"],
    approvedStoryFragments: ["ep12.risk_context"],
    openingNarrative: "{{name}} has built up a small cushion of savings and now has to decide where that money should actually sit while {{subject}} isn't using it.",
    scenario: {
      prompt: "{{name}} has $1,500 set aside. Compare a high-yield savings account, a 12-month CD, and a short-term Treasury bill.",
      type: "compare_total_cost"
    },
    choices: [
      {
        id: "a",
        text: "Keep it all in a savings account",
        whyChosen: "Full access if an emergency comes up.",
        possibleBenefit: "Complete liquidity — the money is available anytime.",
        possibleCost: "Savings rates can be lower than a locked-in CD or T-bill rate at a given moment.",
        possibleRisk: "Inflation can erode purchasing power if the rate doesn't keep pace.",
        immediateEffect: { liquidAssets: 1500, financialKnowledge: 2 },
        futureEffect: "Cash remains fully available for any future need without penalty.",
        whatCouldChangeThisOutcome: "Comparing current published rates across account types before deciding.",
        sourceIds: ["cfpb-bank-accounts", "fdic-deposit-insurance"]
      },
      {
        id: "b",
        text: "Put it into a 12-month CD",
        whyChosen: "Locks in a potentially higher rate for a known period.",
        possibleBenefit: "Often a higher stated rate than a basic savings account.",
        possibleCost: "Early withdrawal typically triggers a penalty.",
        possibleRisk: "Reduced liquidity if an emergency requires the cash before maturity.",
        immediateEffect: { liquidAssets: 1500, financialKnowledge: 3 },
        futureEffect: "Matures in 12 months with the stated return, assuming no early withdrawal.",
        whatCouldChangeThisOutcome: "Splitting savings across several maturities (a 'CD ladder') to balance access and return.",
        sourceIds: ["cfpb-bank-accounts", "fdic-deposit-insurance"]
      },
      {
        id: "c",
        text: "Buy a short-term Treasury bill",
        whyChosen: "Backed by the U.S. government and available in short maturities.",
        possibleBenefit: "Considered very low default risk and can offer competitive short-term rates.",
        possibleCost: "Market price can fluctuate before maturity if sold early; requires a TreasuryDirect or brokerage account.",
        possibleRisk: "Reinvestment risk when it matures — future rates are not guaranteed to match today's.",
        immediateEffect: { liquidAssets: 1500, financialKnowledge: 3 },
        futureEffect: "Principal is generally received at face value if held to maturity, though inflation still affects real purchasing power.",
        whatCouldChangeThisOutcome: "Reviewing current Treasury bill yields and maturities directly on TreasuryDirect.",
        sourceIds: ["treasurydirect-tbills"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} keeps full flexibility with the money.",
      b: "{{name}} commits the funds for a fixed term in exchange for a potentially better rate.",
      c: "{{name}} owns a government security maturing in a set number of weeks."
    },
    oneYearConsequences: {
      a: "The account balance has grown modestly with interest and remains fully accessible.",
      b: "The CD has matured (or is close to it), and {{name}} can choose to withdraw, renew, or reinvest.",
      c: "The bill has matured, and {{name}} received face value, which can be reinvested or spent."
    },
    longTermConsequences: {
      a: "Consistently prioritizing liquidity over yield may mean lower long-run growth on cash reserves.",
      b: "Laddering CDs over time can balance access needs against rate-seeking.",
      c: "Comfort with direct government securities can expand into other fixed-income tools later."
    },
    recoveryPath: "If an emergency requires locked funds before maturity, most CDs allow early withdrawal for a penalty — costly, but not catastrophic, and it teaches the value of keeping some cash fully liquid going forward.",
    conceptExplanation: {
      what: "Cash tools include savings accounts, certificates of deposit (CDs), and Treasury bills — short-term places to hold money with varying liquidity and return.",
      why: "These tools exist to preserve capital and provide modest return while keeping money accessible on different timelines.",
      how: "Savings accounts offer instant access; CDs lock funds for a term in exchange for a set rate; Treasury bills are short-term government debt purchased at a discount and redeemed at face value.",
      cost: "CDs charge early withdrawal penalties; Treasury bills sold before maturity may be worth more or less than face value depending on interest-rate moves.",
      risks: "No cash tool is risk-free in every sense: savings accounts face inflation risk, CDs face liquidity risk, and Treasury bills face reinvestment and interest-rate risk if sold early.",
      whoMayBenefit: "Anyone holding money they don't need immediately but also can't afford to expose to significant market volatility.",
      whoMayNotBenefit: "Someone who needs every dollar liquid for near-certain short-term expenses may not benefit from locking funds in a CD.",
      misunderstandingRisk: "Assuming any of these tools guarantees a real (inflation-adjusted) gain, or that a Treasury bill can never lose value if sold before maturity.",
      verifyNote: "Check current FDIC/NCUA insurance limits and current Treasury bill rates before making decisions."
    },
    realWorldExample: "Harper, a fictional saver, splits an emergency fund between a savings account for full access and a short Treasury bill ladder for the portion not needed immediately, balancing liquidity and return. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is 'nominal return' as opposed to 'real return'?",
        type: "multiple_choice",
        options: [
          "Nominal return already accounts for inflation",
          "Real return is the stated rate before any adjustment",
          "Nominal return is the stated rate; real return adjusts for inflation",
          "They are the same thing"
        ],
        correctAnswer: "Nominal return is the stated rate; real return adjusts for inflation",
        explanation: "Real return subtracts the effect of inflation from the nominal (stated) return to show actual purchasing-power growth."
      },
      {
        id: "kc2",
        question: "Why might a CD not be the best place for an emergency fund?",
        type: "multiple_choice",
        options: [
          "CDs are illegal for emergency funds",
          "CDs typically charge a penalty for early withdrawal, reducing immediate access",
          "CDs are riskier than stocks",
          "CDs cannot be opened by individuals"
        ],
        correctAnswer: "CDs typically charge a penalty for early withdrawal, reducing immediate access",
        explanation: "Emergency funds generally prioritize liquidity, and CD early-withdrawal penalties work against that goal."
      }
    ],
    sourceIds: ["cfpb-bank-accounts", "fdic-deposit-insurance", "treasurydirect-tbills"],
    achievementId: "risk-balancer",
    unlocks: "ep13",
    accessibilitySummary: "Comparison presented as an accessible table alternative with plain-language rows rather than a chart only.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep13",
    act: 3,
    title: "Stocks, Bonds, and Diversified Funds",
    subtitle: "Ownership, lending, and the language of markets",
    estimatedMinutes: 15,
    learningObjectives: [
      "Explain what owning stock and holding a bond each represent",
      "Define volatility, diversification, and fees",
      "Distinguish mutual funds and ETFs from individual securities",
      "Recognize the limitations of past performance as a predictor"
    ],
    personalizationSlots: [],
    approvedStoryFragments: [],
    openingNarrative: "{{name}} hears classmates talking about 'the market' and realizes {{subject}} doesn't actually know what buying a share or a bond means.",
    scenario: {
      prompt: "{{name}} is deciding how to think about a small amount of long-term savings: an individual stock, an individual bond, or a diversified fund.",
      type: "match_term"
    },
    choices: [
      {
        id: "a",
        text: "Learn about buying a single company's stock",
        whyChosen: "Feels exciting and directly tied to a company {{subject}} admires.",
        possibleBenefit: "Full understanding of one company's direct ownership stake.",
        possibleCost: "Concentration in one company means higher volatility exposure.",
        possibleRisk: "A single company can decline sharply or fail entirely.",
        immediateEffect: { financialKnowledge: 2 },
        futureEffect: "Outcome depends heavily on that one company's performance — a single case is not representative of investing generally.",
        whatCouldChangeThisOutcome: "Learning to research a company's fundamentals rather than picking based on brand loyalty alone.",
        sourceIds: ["sec-stocks"]
      },
      {
        id: "b",
        text: "Learn about buying a single bond",
        whyChosen: "Feels less volatile than stock ownership.",
        possibleBenefit: "Represents a defined lending relationship with stated interest and maturity.",
        possibleCost: "Bond prices can still fall in the market if interest rates rise before maturity.",
        possibleRisk: "The issuer could default depending on creditworthiness.",
        immediateEffect: { financialKnowledge: 2 },
        futureEffect: "Predictable interest payments if held to maturity and the issuer does not default.",
        whatCouldChangeThisOutcome: "Comparing issuer credit ratings and understanding interest-rate risk before buying.",
        sourceIds: ["sec-investing-basics"]
      },
      {
        id: "c",
        text: "Learn about a diversified index fund",
        whyChosen: "Spreads exposure across many companies or bonds at once.",
        possibleBenefit: "Diversification can reduce the impact of any single company's decline.",
        possibleCost: "Funds carry fees (expense ratios) that reduce net return over time.",
        possibleRisk: "Diversification reduces but does not eliminate market-wide risk.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "Performance tracks the broader market or index rather than a single company's fate.",
        whatCouldChangeThisOutcome: "Comparing expense ratios across similar funds before choosing one.",
        sourceIds: ["sec-investing-basics", "sec-compound-interest-calc"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} understands direct company ownership but takes on concentrated exposure.",
      b: "{{name}} understands lending to an issuer but must track interest-rate and credit risk.",
      c: "{{name}} understands pooled diversification and the tradeoff of ongoing fees."
    },
    oneYearConsequences: {
      a: "A single stock's price may have moved sharply in either direction — this is not predictable in advance.",
      b: "A single bond continues to pay stated interest unless the issuer defaults or {{name}} sells before maturity.",
      c: "A diversified fund's value has moved with the broader market, smoothing (not eliminating) single-company risk."
    },
    longTermConsequences: {
      a: "Concentration in one company can produce outsized gains or losses over decades — a well-known but high-variance outcome.",
      b: "A bond-heavy long-term strategy can lag stock-heavy strategies historically, though with historically lower volatility.",
      c: "Broad diversification over long time horizons has historically reduced single-company risk, though it never guarantees a positive return."
    },
    recoveryPath: "Investment mixes can be rebalanced at any time as understanding grows — no single early choice locks in a permanent outcome.",
    conceptExplanation: {
      what: "A stock represents partial ownership in a company; a bond represents a loan to a company or government that pays interest. Mutual funds and ETFs pool many stocks or bonds together.",
      why: "These markets exist to let companies and governments raise capital while letting investors participate in potential growth or interest income.",
      how: "Investors buy and sell shares or bonds through brokerage accounts; funds combine many holdings to spread risk.",
      cost: "Funds charge expense ratios; trading may involve commissions or bid-ask spreads; all involve tax considerations on gains.",
      risks: "Stock prices are volatile and can decline sharply; bonds carry default and interest-rate risk; diversification reduces but never eliminates risk.",
      whoMayBenefit: "Investors with time horizons long enough to ride out volatility and who understand they are not guaranteed a return.",
      whoMayNotBenefit: "Someone needing the money in the short term, or someone uncomfortable with any chance of loss, may prefer more stable cash tools instead.",
      misunderstandingRisk: "Assuming stocks always go up over any given period, or that a bond is automatically 'safe' regardless of interest-rate movement or issuer quality.",
      verifyNote: "This course does not recommend individual securities. See Investor.gov for neutral, foundational explanations."
    },
    realWorldExample: "Casey, a fictional investor, holds a diversified index fund for retirement money with a decades-long horizon, while keeping near-term savings in cash tools — illustrating how time horizon shapes investment choice, not universal rules. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why is 'stocks always go up' a misleading statement?",
        type: "detect_misleading_claim",
        options: [
          "It's not misleading — it's a guarantee",
          "Markets can and do decline over various periods, sometimes for extended stretches",
          "Stocks only go up in election years",
          "It only applies to bonds, not stocks"
        ],
        correctAnswer: "Markets can and do decline over various periods, sometimes for extended stretches",
        explanation: "Historical long-run averages do not guarantee any specific period's outcome, and downturns are a normal part of market history."
      },
      {
        id: "kc2",
        question: "What is one key benefit of a diversified fund compared to a single stock?",
        type: "multiple_choice",
        options: [
          "It eliminates all risk",
          "It spreads exposure across many holdings, reducing single-company risk",
          "It guarantees higher returns",
          "It has no fees"
        ],
        correctAnswer: "It spreads exposure across many holdings, reducing single-company risk",
        explanation: "Diversification reduces concentration risk but does not eliminate market-wide risk or guarantee gains."
      }
    ],
    sourceIds: ["sec-investing-basics", "sec-stocks", "sec-compound-interest-calc"],
    achievementId: "investor-vocabulary-builder",
    unlocks: "ep14",
    accessibilitySummary: "Term comparisons available as a plain-text glossary-style list alongside any visual card layout.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep14",
    act: 3,
    title: "Starting Something—Sole Proprietorship, LLC, or Corporation",
    subtitle: "A business idea is not automatically a legal entity",
    estimatedMinutes: 15,
    learningObjectives: [
      "Distinguish sole proprietorship, partnership, LLC, and corporation",
      "Explain why an LLC is not automatically a tax strategy",
      "Identify basic steps: state registration, EIN, licenses, contracts, insurance",
      "Recognize that entity choice depends on individual circumstances"
    ],
    personalizationSlots: ["ep14.business_context"],
    approvedStoryFragments: ["ep14.business_context"],
    openingNarrative: "{{name}} has an idea that could make some money on the side, and a friend says {{subject}} should 'just start an LLC' — but {{name}} isn't sure what that actually means yet.",
    scenario: {
      prompt: "{{name}} researches business structures before doing anything else. What should {{subject}} learn first?",
      type: "identify_missing_info"
    },
    choices: [
      {
        id: "a",
        text: "Start operating informally as a sole proprietorship",
        whyChosen: "No separate registration is required to begin.",
        possibleBenefit: "Simplest and least expensive way to start; income reported on personal taxes.",
        possibleCost: "No legal separation between personal and business liability.",
        possibleRisk: "Personal assets can be exposed if the business is sued or owes money.",
        immediateEffect: { businessAssets: 0, financialKnowledge: 2 },
        futureEffect: "Can convert to an LLC or corporation later as the business grows.",
        whatCouldChangeThisOutcome: "Purchasing business liability insurance even while operating as a sole proprietor.",
        sourceIds: ["sba-choose-structure"]
      },
      {
        id: "b",
        text: "Form an LLC before doing any business",
        whyChosen: "Heard that an LLC 'protects everything.'",
        possibleBenefit: "May provide a legal separation between personal and business liability in many circumstances.",
        possibleCost: "State filing fees, potential franchise taxes, and ongoing compliance requirements.",
        possibleRisk: "An LLC does not automatically protect against every liability, and skipping contracts or insurance can still expose the owner.",
        immediateEffect: { businessAssets: 0, financialKnowledge: 3 },
        futureEffect: "Requires maintaining the entity properly (separate accounts, records) or the liability protection can be challenged.",
        whatCouldChangeThisOutcome: "Consulting a small-business attorney or the state filing office about requirements before assuming full protection.",
        sourceIds: ["irs-llc", "sba-choose-structure", "tx-sos-business-structure"]
      },
      {
        id: "c",
        text: "Research all structures and consult free small-business resources first",
        whyChosen: "Wants to make an informed decision before committing.",
        possibleBenefit: "Avoids unnecessary fees or missing legal requirements.",
        possibleCost: "Takes more time before the business technically launches.",
        possibleRisk: "Minimal — the main tradeoff is time.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "Sets a foundation for choosing the right structure for the actual circumstances.",
        whatCouldChangeThisOutcome: "Using SBA resources and a state-specific filing office to compare requirements and costs.",
        sourceIds: ["sba-choose-structure", "tx-sos-business-structure"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} can start earning money quickly but carries full personal liability.",
      b: "{{name}} pays filing costs upfront for a structure that may or may not be necessary yet.",
      c: "{{name}} delays launch slightly but starts with a clearer, informed plan."
    },
    oneYearConsequences: {
      a: "If the business grows, {{name}} may choose to formalize into an LLC or corporation later.",
      b: "If {{name}} did not maintain separate records, the LLC's liability protection could be challenged in a dispute.",
      c: "{{name}} chose a structure that matched actual risk and revenue rather than assumptions."
    },
    longTermConsequences: {
      a: "Extended informal operation with meaningful revenue can create real personal liability exposure over time.",
      b: "A properly maintained LLC can offer a meaningful legal separation, but it is not a substitute for insurance, contracts, or good accounting.",
      c: "An informed early decision tends to save money and reduce legal risk over the life of the business."
    },
    recoveryPath: "A sole proprietorship can convert to an LLC or corporation at any point once the business justifies the added cost and complexity — no early choice is permanent.",
    conceptExplanation: {
      what: "Sole proprietorships, partnerships, LLCs, and corporations are legal structures with different liability, tax, and compliance implications.",
      why: "These structures exist to define ownership, liability exposure, and how the business is taxed.",
      how: "Formation generally requires state registration (for LLCs/corporations), an EIN from the IRS, relevant licenses, and often a separate bank account.",
      cost: "State filing fees, potential franchise or annual report fees, and (for corporations) more complex tax filing.",
      risks: "An LLC does not automatically protect all assets — courts can disregard the entity ('pierce the corporate veil') if it isn't properly maintained.",
      whoMayBenefit: "Businesses with real liability exposure, multiple owners, or a need for formal structure to attract investment.",
      whoMayNotBenefit: "A very small, low-risk side project may not need the cost and complexity of formal incorporation immediately.",
      misunderstandingRisk: "Believing 'an LLC automatically protects everything' regardless of how the business is run.",
      verifyNote: "Verify current state filing fees and requirements directly with the Texas Secretary of State or SBA.gov, since fees and rules change."
    },
    realWorldExample: "Morgan, a fictional owner of a small pet-grooming business, formed an LLC but kept mixing personal and business funds; in a lawsuit, the mixing became evidence used to challenge the liability protection — illustrating why the entity alone is not enough. This illustrative example is not a real person or business.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why is 'an LLC automatically protects everything' a misleading claim?",
        type: "detect_misleading_claim",
        options: [
          "LLCs offer no protection at all",
          "Protection can be challenged if the entity isn't properly maintained, such as by commingling funds",
          "LLCs are illegal in most states",
          "Only corporations offer any protection"
        ],
        correctAnswer: "Protection can be challenged if the entity isn't properly maintained, such as by commingling funds",
        explanation: "Courts can disregard the liability shield if an LLC is not run as a genuinely separate entity."
      },
      {
        id: "kc2",
        question: "What is one requirement commonly needed to formally start an LLC?",
        type: "multiple_choice",
        options: ["Nothing — it happens automatically", "State registration and often an EIN from the IRS", "A personal credit score check", "A minimum bank balance set by the IRS"],
        correctAnswer: "State registration and often an EIN from the IRS",
        explanation: "LLCs generally require state-level registration and typically an Employer Identification Number for tax purposes."
      }
    ],
    sourceIds: ["irs-llc", "sba-choose-structure", "tx-sos-business-structure", "tx-comptroller-franchise-tax"],
    achievementId: "business-boundary-builder",
    unlocks: "ep15",
    accessibilitySummary: "Entity comparison presented as an accessible definition list, not solely a visual diagram.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep15",
    act: 3,
    title: "Keep Business and Personal Money Separate",
    subtitle: "Why commingling funds creates accounting, tax, and legal problems",
    estimatedMinutes: 12,
    learningObjectives: [
      "Explain why separate business and personal accounts matter",
      "Describe basic bookkeeping, receipts, and record-keeping practices",
      "Distinguish business revenue from personal spending money",
      "Identify basic internal controls that reduce fraud risk"
    ],
    personalizationSlots: [],
    approvedStoryFragments: [],
    openingNarrative: "{{name}}'s small side business is bringing in real money now, and {{subject}} has been depositing it straight into the same personal checking account {{subject}} uses for everything else.",
    scenario: {
      prompt: "{{name}}'s accountant friend asks to see business records at tax time. What does {{name}} discover about mixing accounts?",
      type: "identify_missing_info"
    },
    choices: [
      {
        id: "a",
        text: "Continue using one account for everything",
        whyChosen: "Simpler to manage day to day.",
        possibleBenefit: "No extra account fees or setup effort.",
        possibleCost: "Bookkeeping becomes far harder to reconstruct at tax time.",
        possibleRisk: "Commingling can weaken any liability protection from a business entity and complicates tax filing accuracy.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Tax preparation becomes more expensive and error-prone as transaction volume grows.",
        whatCouldChangeThisOutcome: "Opening a separate business account before the next tax year begins.",
        sourceIds: ["sba-business-bank-account"]
      },
      {
        id: "b",
        text: "Open a dedicated business bank account and track everything separately",
        whyChosen: "Wants clean records and less tax-season stress.",
        possibleBenefit: "Clear separation supports accurate bookkeeping and stronger liability protection if formally incorporated.",
        possibleCost: "Possible account fees and the effort of tracking two sets of finances.",
        possibleRisk: "Still requires discipline — opening the account alone doesn't guarantee good habits.",
        immediateEffect: { businessAssets: 0, financialKnowledge: 3 },
        futureEffect: "Tax filing becomes more straightforward with clearer categorization of income and expenses.",
        whatCouldChangeThisOutcome: "Adding simple bookkeeping software to track categories automatically.",
        sourceIds: ["sba-business-bank-account"]
      },
      {
        id: "c",
        text: "Open a separate account and adopt basic bookkeeping and internal controls",
        whyChosen: "Wants to build good habits from the start, including fraud prevention.",
        possibleBenefit: "Strongest foundation for accurate taxes, fraud prevention, and future growth (including possibly hiring help).",
        possibleCost: "More upfront time investment to set up processes.",
        possibleRisk: "Minimal, though systems still require ongoing maintenance.",
        immediateEffect: { businessAssets: 0, financialKnowledge: 4 },
        futureEffect: "Business is positioned to scale, seek credit, or bring on partners with credible records.",
        whatCouldChangeThisOutcome: "Reviewing basic internal-control practices (like requiring receipts for all expenses) as the business grows.",
        sourceIds: ["sba-business-bank-account", "irs-filing"]
      }
    ],
    immediateConsequences: {
      a: "Records stay tangled, but no immediate cost is incurred.",
      b: "A cleaner financial picture begins immediately.",
      c: "A cleaner, more fraud-resistant financial system begins immediately."
    },
    oneYearConsequences: {
      a: "Tax filing takes significantly longer and may require paying a professional extra to untangle transactions.",
      b: "Tax filing is more straightforward, and {{name}} has real data on whether the business is profitable.",
      c: "{{name}} has both clean records and reduced fraud exposure, useful if seeking a business loan."
    },
    longTermConsequences: {
      a: "Ongoing commingling can create larger legal and tax exposure as the business scales.",
      b: "Consistent separation builds a credible financial history that supports future business credit or investment.",
      c: "Strong internal controls and clean records position the business well for growth, audits, or eventual sale."
    },
    recoveryPath: "Separating accounts can start at any time — a business does not need to have been organized correctly from day one to fix its books going forward.",
    conceptExplanation: {
      what: "Commingling is mixing personal and business funds in the same account or transactions.",
      why: "Separate accounts exist to make accurate bookkeeping possible and to preserve any liability protection from a formal business entity.",
      how: "Open a dedicated business account, keep receipts, categorize income and expenses, and consider basic bookkeeping software or a bookkeeper.",
      cost: "Business accounts may carry fees; bookkeeping tools or professional help cost money and time.",
      risks: "Commingling can trigger tax-reporting errors, weaken liability protection, and make fraud or theft harder to detect.",
      whoMayBenefit: "Any business owner, from a small side hustle to a growing company, benefits from clean separation.",
      whoMayNotBenefit: "There is no scenario in which commingling personal and business funds is advisable — this is a near-universal best practice, though the formality of systems can scale with business size.",
      misunderstandingRisk: "Assuming that business revenue is automatically available as personal spending money without accounting for expenses, taxes, and reserves.",
      verifyNote: "See SBA.gov guidance on opening a business bank account for current, practical steps."
    },
    realWorldExample: "Alex, a fictional freelance graphic designer, paid personal rent directly from client payments deposited into one account; when a client dispute arose, it was difficult to prove which funds were business income, complicating both taxes and the dispute. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why can commingling personal and business funds create legal problems?",
        type: "multiple_choice",
        options: [
          "It never causes any legal issues",
          "It can weaken liability protection and make it harder to prove business versus personal transactions",
          "It only affects the business's marketing",
          "It automatically triggers an audit"
        ],
        correctAnswer: "It can weaken liability protection and make it harder to prove business versus personal transactions",
        explanation: "Commingled funds can undermine an LLC's liability shield and complicate tax and legal recordkeeping."
      },
      {
        id: "kc2",
        question: "Is all business revenue the same as personal spending money?",
        type: "multiple_choice",
        options: [
          "Yes, always",
          "No — expenses, taxes, and reserves must be accounted for first",
          "Only for corporations",
          "Only if the business has no employees"
        ],
        correctAnswer: "No — expenses, taxes, and reserves must be accounted for first",
        explanation: "Business revenue must cover expenses, taxes, and reserves before any remainder becomes available as personal compensation."
      }
    ],
    sourceIds: ["sba-business-bank-account", "irs-filing"],
    achievementId: "business-owner-boundary-keeper",
    unlocks: "ep16",
    accessibilitySummary: "Content presented as plain-language checklists suitable for screen readers.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep16",
    act: 3,
    title: "Rent, Buy, Share, or Stay Flexible",
    subtitle: "Housing decisions have no single universal answer",
    estimatedMinutes: 14,
    learningObjectives: [
      "Compare renting, buying, and shared/multigenerational housing",
      "Identify the full cost of homeownership beyond the purchase price",
      "Explain opportunity cost in a housing decision",
      "Recognize that local market conditions change the calculation"
    ],
    personalizationSlots: ["ep16.housing_context"],
    approvedStoryFragments: ["ep16.housing_context"],
    openingNarrative: "{{name}} is a few years into a career now and starts wondering seriously about where {{subject}} wants to live long-term.",
    scenario: {
      prompt: "{{name}} compares renting an apartment, buying a starter home, and sharing housing with roommates or family.",
      type: "compare_total_cost"
    },
    choices: [
      {
        id: "a",
        text: "Continue renting for flexibility",
        whyChosen: "Values mobility for career or personal reasons.",
        possibleBenefit: "Easier to relocate; no responsibility for major repairs.",
        possibleCost: "No equity building through rent payments.",
        possibleRisk: "Rent increases over time are outside the renter's control.",
        immediateEffect: { financialKnowledge: 2 },
        futureEffect: "Flexibility preserved for career or life changes.",
        whatCouldChangeThisOutcome: "Investing the difference between renting and buying costs elsewhere, if disciplined about it.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "b",
        text: "Buy a starter home",
        whyChosen: "Wants to build equity and put down roots.",
        possibleBenefit: "Potential equity growth and stability of housing costs (with a fixed-rate mortgage).",
        possibleCost: "Down payment, closing costs, property tax, insurance, and repair costs.",
        possibleRisk: "Home values can decline; illiquidity makes it harder to relocate quickly.",
        immediateEffect: { totalAssets: 0, debtBalance: 0, financialKnowledge: 3 },
        futureEffect: "Building equity over time, offset by ongoing maintenance and tax obligations.",
        whatCouldChangeThisOutcome: "Local market appreciation or decline, job stability, and interest-rate environment at purchase.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Share housing with roommates or family",
        whyChosen: "Wants to reduce housing cost significantly, at least for now.",
        possibleBenefit: "Can dramatically lower monthly housing expense, freeing money for savings or debt payoff.",
        possibleCost: "Less privacy and potential need for shared-living conflict resolution.",
        possibleRisk: "Depends on the reliability of roommates or the stability of the shared arrangement.",
        immediateEffect: { monthlyCashFlow: 0, financialKnowledge: 3 },
        futureEffect: "Extra savings from lower housing cost can accelerate other goals, like an emergency fund or debt payoff.",
        whatCouldChangeThisOutcome: "A formal written agreement about shared expenses and responsibilities.",
        sourceIds: ["cfpb-your-money-your-goals"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} keeps flexibility and avoids large upfront housing costs.",
      b: "{{name}} takes on a down payment, closing costs, and a mortgage payment.",
      c: "{{name}} lowers housing costs but shares living space and decisions."
    },
    oneYearConsequences: {
      a: "Rent may have increased at renewal, and {{name}} has no equity from the payments made.",
      b: "{{name}} has made a year of payments, some of which built equity, alongside real maintenance costs.",
      c: "Extra monthly savings from the shared arrangement have accumulated toward another goal."
    },
    longTermConsequences: {
      a: "Renting over decades avoids maintenance costs and market risk but forgoes the possibility of home equity growth.",
      b: "Homeownership can build significant equity over decades, but only if the market cooperates and the owner keeps up with costs.",
      c: "Shared housing can accelerate other financial goals substantially but is not a permanent solution for everyone."
    },
    recoveryPath: "Housing decisions can be revisited at any lease renewal, refinance opportunity, or life change — no housing choice is permanent.",
    conceptExplanation: {
      what: "Renting, buying, and shared housing are three legitimate approaches to meeting housing needs, each with different cost and flexibility tradeoffs.",
      why: "Housing is typically the largest recurring expense, so understanding true costs and tradeoffs matters significantly.",
      how: "Compare total cost of ownership (mortgage, taxes, insurance, maintenance, opportunity cost of the down payment) against total rent cost, factoring in local market conditions.",
      cost: "Buying involves a down payment, closing costs, and ongoing maintenance; renting involves potential annual increases with no equity building.",
      risks: "Homeownership carries market risk and illiquidity; renting carries the risk of rising costs without equity growth.",
      whoMayBenefit: "Buyers who plan to stay put for years, in a stable local market, with funds for a down payment and reserves for repairs.",
      whoMayNotBenefit: "Someone likely to relocate soon, or without adequate reserves for repairs, may be better served by renting or shared housing.",
      misunderstandingRisk: "Believing 'renting is throwing money away' or that buying a home is always the superior financial choice — both ignore opportunity cost and individual circumstances.",
      verifyNote: "Local market data, mortgage rates, and property tax rates vary significantly and should be checked directly for a specific location."
    },
    realWorldExample: "Two fictional friends, Riley and Quinn, in the same city made different choices: Riley bought and built equity over a stable decade, while Quinn rented and invested the cost difference, moving twice for better job offers. Both approaches produced reasonable outcomes given their circumstances. This illustrative example is not based on real people.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why is 'renting is throwing money away' considered a biased oversimplification?",
        type: "detect_misleading_claim",
        options: [
          "It's completely true in all cases",
          "Renting provides housing services and flexibility, and buying carries its own costs and risks that can offset equity gains",
          "Rent payments always build equity too",
          "Renting is illegal in most states"
        ],
        correctAnswer: "Renting provides housing services and flexibility, and buying carries its own costs and risks that can offset equity gains",
        explanation: "Renting pays for housing and flexibility as a service; whether buying is 'better' depends on market conditions, time horizon, and personal circumstances."
      },
      {
        id: "kc2",
        question: "What is 'opportunity cost' in the context of a home down payment?",
        type: "multiple_choice",
        options: [
          "The interest rate on the mortgage",
          "The potential return that money could have earned if invested elsewhere instead",
          "The cost of homeowners insurance",
          "The realtor's commission"
        ],
        correctAnswer: "The potential return that money could have earned if invested elsewhere instead",
        explanation: "Opportunity cost reflects what else that capital could have done, which is part of a full cost comparison."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals"],
    achievementId: "home-and-housing-navigator",
    unlocks: "ep17",
    accessibilitySummary: "Cost comparison available as an accessible plain-text table alternative.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep17",
    act: 4,
    title: "Protect the Plan",
    subtitle: "Insurance, fraud awareness, and cybersecurity as risk transfer",
    estimatedMinutes: 14,
    learningObjectives: [
      "Explain insurance as a tool for transferring financial risk",
      "Compare major insurance types at an introductory level",
      "Identify common fraud and scam patterns",
      "Describe basic cybersecurity practices for financial accounts"
    ],
    personalizationSlots: [],
    approvedStoryFragments: [],
    openingNarrative: "{{name}} has been building savings and assets for a while now, and a minor scare — a friend's stolen wallet — makes {{subject}} think seriously about what could go wrong.",
    scenario: {
      prompt: "{{name}} reviews available insurance options and a suspicious text message claiming to be from a bank.",
      type: "detect_misleading_claim"
    },
    choices: [
      {
        id: "a",
        text: "Skip most insurance to save money now",
        whyChosen: "Premiums feel like an unnecessary expense while healthy and asset-light.",
        possibleBenefit: "More cash available in the short term.",
        possibleCost: "No protection if a costly, unexpected event occurs.",
        possibleRisk: "A single serious event (accident, illness, disability) could create severe financial harm without coverage.",
        immediateEffect: { insuranceCoverage: 0, financialKnowledge: 1 },
        futureEffect: "Savings remain exposed to a single large, uninsured loss.",
        whatCouldChangeThisOutcome: "Adding at least catastrophic-level coverage even on a tight budget.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "b",
        text: "Buy baseline health, auto (if applicable), and renters insurance",
        whyChosen: "Wants core protection without overspending.",
        possibleBenefit: "Covers the most statistically likely and financially damaging risks.",
        possibleCost: "Ongoing premium expense.",
        possibleRisk: "Coverage gaps remain for risks like disability or major liability exposure.",
        immediateEffect: { insuranceCoverage: 1, financialKnowledge: 3 },
        futureEffect: "Reasonable protection against the most common risks at this life stage.",
        whatCouldChangeThisOutcome: "Adding disability insurance once income and responsibilities grow.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Respond to the suspicious bank text message with account details",
        whyChosen: "The message looked official and urgent.",
        possibleBenefit: "None — this is a common fraud pattern (phishing).",
        possibleCost: "Potential direct financial loss and identity theft exposure.",
        possibleRisk: "High — scammers can drain accounts or open new credit in the victim's name.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Without quick action (freezing accounts, reporting fraud), losses can compound.",
        whatCouldChangeThisOutcome: "Contacting the bank directly using a known phone number instead of replying to the message.",
        sourceIds: ["cfpb-debt-collection"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} saves money now but carries meaningful uninsured risk.",
      b: "{{name}} pays modest premiums for meaningful protection against common risks.",
      c: "{{name}} may have exposed sensitive account information to a scammer."
    },
    oneYearConsequences: {
      a: "If no major event occurred, the savings were 'wasted' in hindsight — but the risk was real the whole time.",
      b: "If an event occurred, the coverage absorbed much of the financial impact.",
      c: "If fraud occurred, {{name}} may be dealing with disputed charges, new account setup, and credit monitoring."
    },
    longTermConsequences: {
      a: "Going without insurance for years increases the cumulative chance that an uninsured event causes serious financial harm.",
      b: "Consistent baseline coverage, reviewed periodically, tends to protect long-term financial stability.",
      c: "Recovering from serious fraud can take months and requires vigilant credit monitoring, but recovery is possible with prompt reporting."
    },
    recoveryPath: "If sensitive information was shared, immediately contacting the bank, freezing affected accounts, and monitoring credit reports can limit and eventually reverse most damage — fraud recovery is difficult but not typically permanent.",
    conceptExplanation: {
      what: "Insurance transfers the financial risk of a costly, unlikely event to an insurer in exchange for a smaller, predictable premium.",
      why: "It exists so that no single unlucky event has to be financially catastrophic for an individual or family.",
      how: "Policies specify coverage, deductibles (the amount paid out of pocket before coverage begins), exclusions, and beneficiaries.",
      cost: "Premiums are paid regularly regardless of whether a claim is ever filed.",
      risks: "Underinsurance leaves gaps; scams impersonating insurers or banks are common and can cause direct financial harm.",
      whoMayBenefit: "Anyone with assets, income, or dependents to protect against a costly, low-probability event.",
      whoMayNotBenefit: "Coverage that duplicates existing protection (e.g., through an employer or family plan) may not be worth the added premium.",
      misunderstandingRisk: "Assuming any single insurance product is a one-size-fits-all necessity, or that legitimate institutions ask for sensitive information via unsolicited text or email.",
      verifyNote: "This course does not recommend a specific insurance product — compare options and consult a licensed professional for personal circumstances."
    },
    realWorldExample: "Sydney, a fictional renter without renters insurance, lost most belongings in an apartment fire with no coverage, while a neighbor with a low-cost renters policy was reimbursed for the bulk of their losses — illustrating the value of even modest, targeted coverage. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is a deductible?",
        type: "multiple_choice",
        options: [
          "The total amount an insurer will ever pay",
          "The amount the policyholder pays out of pocket before insurance coverage begins",
          "A tax deduction related to insurance",
          "The monthly premium"
        ],
        correctAnswer: "The amount the policyholder pays out of pocket before insurance coverage begins",
        explanation: "A deductible is the policyholder's initial cost-share before the insurer's coverage applies."
      },
      {
        id: "kc2",
        question: "What is a red flag that a message is a phishing attempt?",
        type: "detect_misleading_claim",
        options: [
          "It's from a bank the person actually uses",
          "It creates urgency and asks for sensitive account details via text or email",
          "It has a company logo",
          "It's a phone call during business hours"
        ],
        correctAnswer: "It creates urgency and asks for sensitive account details via text or email",
        explanation: "Legitimate institutions do not typically request sensitive account information through unsolicited, urgent messages."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals", "cfpb-debt-collection"],
    achievementId: "protection-planner",
    unlocks: "ep18",
    accessibilitySummary: "Fraud red-flag list presented as plain, scannable text for screen readers.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep18",
    act: 4,
    title: "Money With Other People",
    subtitle: "Communication, shared accounts, and financial boundaries",
    estimatedMinutes: 13,
    learningObjectives: [
      "Compare joint and separate account approaches",
      "Explain cosigning risk and beneficiary designations",
      "Practice financial communication and boundary-setting language",
      "Recognize that no single relationship or family structure is universal"
    ],
    personalizationSlots: ["ep18.relationship_context"],
    approvedStoryFragments: ["ep18.relationship_context"],
    openingNarrative: "{{name}}'s life is getting more entangled with other people's finances — roommates, a partner, or family — and money conversations are starting to matter more.",
    scenario: {
      prompt: "{{name}} is asked to cosign a loan for a family member and separately considers how to handle shared expenses with a roommate or partner.",
      type: "rank_tradeoffs"
    },
    choices: [
      {
        id: "a",
        text: "Cosign the loan without setting any conditions",
        whyChosen: "Doesn't want to seem like they don't trust the family member.",
        possibleBenefit: "Helps a family member access credit they couldn't get alone.",
        possibleCost: "{{name}} becomes fully legally responsible for the debt if the borrower misses payments.",
        possibleRisk: "Missed payments can damage {{name}}'s own credit, even though {{subject}} never received the loan funds.",
        immediateEffect: { creditHealth: 0, financialKnowledge: 2 },
        futureEffect: "{{name}}'s credit is tied to someone else's repayment behavior for the life of the loan.",
        whatCouldChangeThisOutcome: "Setting a clear written agreement about repayment expectations before cosigning.",
        sourceIds: ["cfpb-credit-reports-scores"]
      },
      {
        id: "b",
        text: "Decline to cosign but offer a different form of support",
        whyChosen: "Wants to help without taking on full legal liability.",
        possibleBenefit: "Protects {{name}}'s own credit and finances from someone else's repayment risk.",
        possibleCost: "The family member may not get the loan, or may need to find another cosigner.",
        possibleRisk: "Possible relational tension if the family member feels declined.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "{{name}}'s own financial position remains unaffected by the loan's outcome.",
        whatCouldChangeThisOutcome: "Offering a smaller, direct, non-cosigned gift or loan instead, with clear terms.",
        sourceIds: ["cfpb-credit-reports-scores"]
      },
      {
        id: "c",
        text: "Set clear shared-expense agreements with a roommate or partner in writing",
        whyChosen: "Wants to avoid conflict and confusion later.",
        possibleBenefit: "Reduces misunderstandings about who owes what and when.",
        possibleCost: "Requires an upfront, sometimes uncomfortable conversation.",
        possibleRisk: "Minimal — clear agreements generally reduce rather than create risk.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "Shared living or partnership finances run more smoothly with less conflict.",
        whatCouldChangeThisOutcome: "Revisiting the agreement periodically as circumstances change.",
        sourceIds: ["cfpb-your-money-your-goals"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} is now fully legally responsible for a debt {{subject}} didn't personally benefit from.",
      b: "{{name}}'s own credit and finances stay protected regardless of the loan's outcome.",
      c: "{{name}} and the other party start their shared financial arrangement with clear expectations."
    },
    oneYearConsequences: {
      a: "If payments were missed, {{name}}'s credit score may have been affected without {{name}} having any direct control over the payments.",
      b: "The family relationship may have required some difficult conversation, but {{name}}'s finances remain separate.",
      c: "Shared expenses have generally been handled smoothly, with fewer money-related conflicts."
    },
    longTermConsequences: {
      a: "Cosigning can work out fine if the borrower pays reliably, but it always carries real legal risk for the cosigner regardless of relationship closeness.",
      b: "Declining to cosign preserves {{name}}'s financial independence, though it may shape family dynamics.",
      c: "Clear financial communication early in a relationship or living arrangement tends to prevent larger conflicts later."
    },
    recoveryPath: "If a cosigned loan does fall into default, working directly with the lender on a repayment plan and prioritizing communication with the borrower can limit further credit damage — it is a serious but not permanent setback.",
    conceptExplanation: {
      what: "Cosigning makes someone legally responsible for another person's debt; joint accounts share ownership and liability; beneficiary designations determine who receives certain assets.",
      why: "These tools exist to enable shared financial life and to help people access credit or benefits they might not access alone.",
      how: "Cosigning is added directly on a loan application; joint accounts are opened with both parties as owners; beneficiaries are named on accounts, insurance, and retirement plans.",
      cost: "Cosigning carries the same repayment risk as being the primary borrower without necessarily receiving any of the loan's benefit.",
      risks: "Cosigner credit can be damaged by someone else's missed payments; joint accounts mean either party can withdraw funds; outdated beneficiary designations can misdirect assets.",
      whoMayBenefit: "Families or partners with high trust and clear communication who want to share resources or help each other access credit.",
      whoMayNotBenefit: "Anyone uncomfortable fully guaranteeing someone else's debt, or without a clear repayment agreement in place.",
      misunderstandingRisk: "Assuming marriage, homeownership, or parenthood is a universal life goal, or that cosigning is a low-risk favor.",
      verifyNote: "Review CFPB resources on cosigning and credit reporting for current consumer protections."
    },
    realWorldExample: "Pat, a fictional parent, cosigned a car loan for an adult child; when payments were missed, Pat's own credit score dropped significantly, despite never driving the car — illustrating that cosigning risk is real regardless of intention. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What happens to a cosigner's credit if the primary borrower misses payments?",
        type: "multiple_choice",
        options: [
          "Nothing — only the primary borrower is affected",
          "The cosigner's credit can be damaged too, since they are equally legally responsible",
          "The loan is automatically forgiven",
          "The cosigner is removed automatically"
        ],
        correctAnswer: "The cosigner's credit can be damaged too, since they are equally legally responsible",
        explanation: "A cosigner shares full legal responsibility for the debt, and missed payments can appear on their credit report as well."
      },
      {
        id: "kc2",
        question: "Why shouldn't this course assume marriage or children are universal goals?",
        type: "multiple_choice",
        options: [
          "Because everyone wants those things eventually",
          "Because life paths and values vary, and financial education should serve many different life visions",
          "Because marriage is financially disadvantageous",
          "Because the course only serves single people"
        ],
        correctAnswer: "Because life paths and values vary, and financial education should serve many different life visions",
        explanation: "Financial literacy should be useful regardless of relationship or family structure, without assuming one path is the norm or the goal."
      }
    ],
    sourceIds: ["cfpb-credit-reports-scores", "cfpb-your-money-your-goals"],
    achievementId: "relationship-money-communicator",
    unlocks: "ep19",
    accessibilitySummary: "Tradeoff ranking available as an accessible list with keyboard-operable reordering controls.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep19",
    act: 4,
    title: "Track Wealth Without Letting It Define You",
    subtitle: "A dashboard for financial health that isn't only about net worth",
    estimatedMinutes: 12,
    learningObjectives: [
      "Build a personal financial-health dashboard beyond net worth alone",
      "Explain privacy and account-security practices for tracking tools",
      "Recognize the effects of comparison culture on financial well-being",
      "Practice values-based review and goal revision"
    ],
    personalizationSlots: [],
    approvedStoryFragments: [],
    openingNarrative: "{{name}} has been making steady progress for a while now and wants a way to see the whole picture — without falling into the trap of measuring life only by a single number.",
    dashboardMetrics: [
      { key: "cashBuffer", label: "Cash buffer (emergency fund months)" },
      { key: "debtBurden", label: "Debt burden (debt relative to income)" },
      { key: "protection", label: "Protection (insurance coverage adequacy)" },
      { key: "flexibility", label: "Flexibility (ability to adapt to change)" },
      { key: "knowledge", label: "Financial knowledge" },
      { key: "wellbeing", label: "Overall wellbeing" },
      { key: "netWorth", label: "Net worth" }
    ],
    scenario: {
      prompt: "{{name}} sees a friend's social media post about a big financial win and starts to feel behind. How should {{subject}} respond?",
      type: "select_evidence"
    },
    choices: [
      {
        id: "a",
        text: "Compare directly against the friend's numbers",
        whyChosen: "Wants a sense of where {{subject}} stands.",
        possibleBenefit: "Can sometimes provide motivation.",
        possibleCost: "Social comparisons rarely account for different starting points, family support, income, or risk taken.",
        possibleRisk: "Can lead to poor decisions made out of comparison rather than personal goals.",
        immediateEffect: { wellbeing: -1, financialKnowledge: 1 },
        futureEffect: "Comparison-driven decisions may not align with {{name}}'s actual values or circumstances.",
        whatCouldChangeThisOutcome: "Reframing the comparison around personal progress over time instead of a single external benchmark.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "b",
        text: "Review {{name}}'s own dashboard across all seven measures",
        whyChosen: "Wants a fuller, more honest picture of financial health.",
        possibleBenefit: "Considers cash buffer, debt, protection, flexibility, knowledge, and wellbeing — not just net worth.",
        possibleCost: "Takes a bit more time than looking at one number.",
        possibleRisk: "Minimal.",
        immediateEffect: { wellbeing: 2, financialKnowledge: 3 },
        futureEffect: "Decisions are grounded in a fuller picture of {{name}}'s actual financial health and values.",
        whatCouldChangeThisOutcome: "Revisiting the dashboard periodically (for example, quarterly) rather than reacting to single moments.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Ignore financial tracking altogether to avoid stress",
        whyChosen: "Comparison and tracking both feel overwhelming right now.",
        possibleBenefit: "Short-term reduction in financial anxiety.",
        possibleCost: "Loses visibility into real progress or emerging problems.",
        possibleRisk: "Problems like rising debt or lapsed insurance can go unnoticed.",
        immediateEffect: { wellbeing: 1, financialKnowledge: -1 },
        futureEffect: "A return to tracking, even occasionally, can restore visibility without requiring constant monitoring.",
        whatCouldChangeThisOutcome: "Setting a low-pressure, infrequent check-in schedule instead of avoiding tracking entirely.",
        sourceIds: ["cfpb-your-money-your-goals"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} feels a temporary emotional reaction based on incomplete information about someone else's full situation.",
      b: "{{name}} gets a grounded, multi-dimensional view of financial health.",
      c: "{{name}} avoids short-term stress but loses visibility into the full picture."
    },
    oneYearConsequences: {
      a: "Comparison-driven choices may or may not have aligned with {{name}}'s actual goals.",
      b: "Regular, values-based review has kept {{name}}'s goals current and realistic.",
      c: "A lack of tracking may have allowed a preventable problem, like rising debt, to go unnoticed."
    },
    longTermConsequences: {
      a: "A pattern of comparison-driven financial decisions can create chronic dissatisfaction regardless of actual progress.",
      b: "A habit of holistic, periodic review supports steady, values-aligned progress over many years.",
      c: "Avoidance can be revisited and replaced with light-touch tracking at any point without lasting harm."
    },
    recoveryPath: "Financial tracking habits can be adjusted at any time — someone who has avoided tracking can start with even a simple monthly check-in and build from there.",
    conceptExplanation: {
      what: "A financial-health dashboard tracks multiple dimensions — cash buffer, debt burden, protection, flexibility, knowledge, and wellbeing — alongside net worth.",
      why: "Net worth alone can hide important information, like whether someone has adequate insurance or emergency savings.",
      how: "Track each dimension periodically using simple, private tools, and review trends rather than single snapshots.",
      cost: "Requires periodic time investment and, for digital tools, attention to privacy and account security.",
      risks: "Tracking tools that aren't secured can expose sensitive financial information; comparison culture can distort perceived progress.",
      whoMayBenefit: "Anyone who wants a fuller, more honest picture of financial health than a single number provides.",
      whoMayNotBenefit: "Someone prone to financial anxiety may need a lower-frequency, gentler check-in cadence rather than constant tracking.",
      misunderstandingRisk: "Treating net worth as the sole measure of financial success or personal worth.",
      verifyNote: "Use reputable, privacy-respecting tools, and verify how any third-party financial app stores and protects your data."
    },
    realWorldExample: "Drew, a fictional professional with an average net worth but strong emergency savings, solid insurance, and low stress, reported higher overall financial wellbeing than a higher-net-worth peer carrying high debt and no protection — illustrating why net worth alone is an incomplete measure. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why is net worth alone an incomplete measure of financial health?",
        type: "multiple_choice",
        options: [
          "Net worth is the only measure that matters",
          "It doesn't capture liquidity, protection, debt burden, or wellbeing",
          "Net worth cannot be calculated",
          "It only applies to businesses"
        ],
        correctAnswer: "It doesn't capture liquidity, protection, debt burden, or wellbeing",
        explanation: "A person can have a high net worth but low liquidity, inadequate insurance, or high stress — net worth alone misses these dimensions."
      },
      {
        id: "kc2",
        question: "What is a healthier alternative to direct social comparison of financial progress?",
        type: "multiple_choice",
        options: [
          "Comparing to a friend's exact numbers regularly",
          "Reviewing personal progress over time against one's own values and dashboard",
          "Avoiding all financial tracking",
          "Only tracking net worth"
        ],
        correctAnswer: "Reviewing personal progress over time against one's own values and dashboard",
        explanation: "Values-based, self-referential review tends to support healthier financial decision-making than direct comparison to others."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals"],
    achievementId: "wealth-tracker",
    unlocks: "ep20",
    accessibilitySummary: "Dashboard available as an accessible list of labeled metrics, not solely a visual gauge chart.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep20",
    act: 4,
    title: "Road to $1.5 Million—Build, Stress-Test, Revise",
    subtitle: "The Financial Foundations capstone: an interactive planning simulator",
    estimatedMinutes: 20,
    learningObjectives: [
      "Compare multiple hypothetical long-term financial pathways",
      "Use an interactive simulator with adjustable assumptions",
      "Explain why projections are estimates, not guarantees",
      "Reflect on how life goals and financial goals interact"
    ],
    personalizationSlots: ["ep20.capstone_context"],
    approvedStoryFragments: ["ep20.capstone_context"],
    openingNarrative: "{{name}} has come a long way since that first chaotic semester, and now it's time to zoom out and stress-test the whole plan.",
    capstone: true,
    simulatorConfig: {
      startingBalance: 2000,
      monthlyContribution: 400,
      years: 30,
      assumedAnnualReturnPct: 6,
      feesPct: 0.5,
      inflationPct: 2.5,
      incomeGrowthPct: 2,
      savingsRatePct: 15,
      debtInterestPct: 0,
      interruptionMonths: 0
    },
    illustrationCases: [
      {
        name: "Lower-growth illustration",
        description: "A more conservative return assumption combined with a temporary income interruption, reflecting that markets and careers don't always move in a straight line.",
        assumptions: { assumedAnnualReturnPct: 4, feesPct: 0.7, inflationPct: 3, interruptionMonths: 6 }
      },
      {
        name: "Middle illustration",
        description: "A moderate, historically plausible return with steady contributions and no major interruptions.",
        assumptions: { assumedAnnualReturnPct: 6, feesPct: 0.5, inflationPct: 2.5, interruptionMonths: 0 }
      },
      {
        name: "Higher-growth illustration",
        description: "A stronger return assumption with rising income and no interruptions — an optimistic but not guaranteed case.",
        assumptions: { assumedAnnualReturnPct: 8, feesPct: 0.3, inflationPct: 2, interruptionMonths: 0 }
      }
    ],
    scenario: {
      prompt: "{{name}} adjusts the planning simulator across several hypothetical life pathways to see how different choices could shape a long-term plan.",
      type: "adjust_simulator"
    },
    choices: [
      {
        id: "a",
        text: "Entry-level salary with consistent saving",
        whyChosen: "Prioritizes steady, disciplined contributions over a high starting salary.",
        possibleBenefit: "Consistency and time in the market can compound meaningfully, even from modest contributions.",
        possibleCost: "Slower initial progress compared to higher-salary paths.",
        possibleRisk: "Vulnerable to interruptions like unemployment, given a thinner cash cushion.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "Under these selected assumptions, the model estimates steady long-term growth, particularly if savings rate increases as income grows.",
        whatCouldChangeThisOutcome: "An increase in savings rate as income grows over the career.",
        sourceIds: ["sec-compound-interest-calc"]
      },
      {
        id: "b",
        text: "Higher salary with lifestyle inflation",
        whyChosen: "Higher income feels like it should automatically lead to more wealth.",
        possibleBenefit: "More disposable income to direct toward savings, if disciplined.",
        possibleCost: "Lifestyle inflation (spending that rises with income) can offset the benefit of a higher salary.",
        possibleRisk: "High income does not guarantee high net worth if the savings rate stays low.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "Under these selected assumptions, the model estimates that outcomes depend far more on savings rate than on salary alone.",
        whatCouldChangeThisOutcome: "Deliberately maintaining a fixed savings rate even as income rises.",
        sourceIds: ["sec-compound-interest-calc"]
      },
      {
        id: "c",
        text: "A path interrupted by unemployment or caregiving, still building stability",
        whyChosen: "Reflects a realistic life event that many people experience.",
        possibleBenefit: "Demonstrates that a plan can recover after a real interruption.",
        possibleCost: "Temporary pause or reduction in contributions during the interruption.",
        possibleRisk: "A longer or repeated interruption can meaningfully change long-term projections.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "Under these selected assumptions, the model estimates that recovery is possible, though the timeline shifts depending on interruption length.",
        whatCouldChangeThisOutcome: "The size of the emergency fund available during the interruption, and how quickly contributions resume afterward.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "d",
        text: "A path that never reaches $1.5 million but achieves stability and meaningful life goals",
        whyChosen: "Prioritizes values like flexibility, service, or family time over a specific net-worth target.",
        possibleBenefit: "A financially stable life fully aligned with personal values, without chasing a specific number.",
        possibleCost: "May not reach $1.5 million under these assumptions.",
        possibleRisk: "None inherent — this path is a legitimate, successful outcome on its own terms.",
        immediateEffect: { financialKnowledge: 3, wellbeing: 2 },
        futureEffect: "Under these selected assumptions, the model estimates a stable, sufficient outcome that reflects the learner's own definition of success.",
        whatCouldChangeThisOutcome: "Revisiting personal goals periodically, since a 'successful' outcome is defined by the individual, not a universal number.",
        sourceIds: ["cfpb-your-money-your-goals"]
      }
    ],
    immediateConsequences: {
      a: "The simulator shows a projected trajectory built on modest, consistent contributions.",
      b: "The simulator shows how savings rate — not salary alone — drives the projection.",
      c: "The simulator shows a temporary dip followed by a modeled recovery period.",
      d: "The simulator shows a stable trajectory that may fall short of $1.5 million while still reflecting a successful, values-aligned life."
    },
    oneYearConsequences: {
      a: "Under these selected assumptions, the model estimates continued gradual progress.",
      b: "Under these selected assumptions, the model estimates that lifestyle choices meaningfully affect the trajectory.",
      c: "Under these selected assumptions, the model estimates a return to the prior trajectory, adjusted for the interruption.",
      d: "Under these selected assumptions, the model estimates continued stability aligned with the chosen priorities."
    },
    longTermConsequences: {
      a: "Under these selected assumptions, the model estimates that consistency and time can produce substantial long-term growth.",
      b: "Under these selected assumptions, the model estimates that a high income without a disciplined savings rate can produce a surprisingly modest long-term result.",
      c: "Under these selected assumptions, the model estimates that recovery from a single interruption is achievable, though repeated interruptions compound impact.",
      d: "Under these selected assumptions, the model estimates a stable, meaningful outcome that never required reaching $1.5 million to be considered a success."
    },
    recoveryPath: "Every pathway in this simulator can be re-run with adjusted assumptions at any time — there is no final, locked-in outcome, and revisiting the plan periodically is expected and healthy.",
    conceptExplanation: {
      what: "This capstone is an interactive simulator that projects a hypothetical net-worth trajectory based on user-adjustable assumptions: starting balance, monthly contribution, years, assumed annual return, fees, inflation, income growth, savings rate, debt interest, and interruptions.",
      why: "Comparing multiple illustrative pathways shows that no single formula produces wealth, and that many different lives can be financially successful on their own terms.",
      how: "Users adjust each input and see nominal dollars, an inflation-adjusted estimate, total contributions, and estimated growth, always paired with stated assumptions and uncertainty warnings.",
      cost: "None to use the simulator itself, but the underlying real-world strategies (saving, investing) involve real trade-offs and effort.",
      risks: "The simulator is illustrative only — actual taxes, returns, job changes, emergencies, market losses, fees, and inflation can materially change real-world results.",
      whoMayBenefit: "Anyone wanting to understand how contribution rate, time, and return assumptions interact over a long horizon.",
      whoMayNotBenefit: "Anyone looking for a guaranteed prediction of their personal financial future — this tool cannot and does not provide that.",
      misunderstandingRisk: "Treating any simulator output as a promise or forecast rather than an illustrative, assumption-dependent estimate.",
      verifyNote: "Compare against the SEC's compound interest calculator and consult a financial professional for personalized projections."
    },
    realWorldExample: "Three fictional graduates from the same graduating class — Blake, Cameron, and Skyler — ended up in very different financial positions ten years later — one through steady saving on a modest salary, one through a business sale, and one through a stable public-service career with strong benefits — illustrating that there is no single required path. This illustrative example is not based on real people.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why does this course say 'the model estimates' instead of 'you will have'?",
        type: "multiple_choice",
        options: [
          "Because the simulator is broken",
          "Because real-world outcomes depend on many unpredictable factors like markets, taxes, jobs, and emergencies",
          "Because dollars aren't real",
          "Because the simulator only works for large amounts"
        ],
        correctAnswer: "Because real-world outcomes depend on many unpredictable factors like markets, taxes, jobs, and emergencies",
        explanation: "Simulations are illustrative estimates based on chosen assumptions, not guarantees of a specific financial future."
      },
      {
        id: "kc2",
        question: "Is a pathway that never reaches $1.5 million considered a failure in this course?",
        type: "multiple_choice",
        options: [
          "Yes, any pathway under $1.5 million is a failure",
          "No — a stable, values-aligned life is presented as a legitimate, successful outcome regardless of a specific net-worth number",
          "Only if the person has children",
          "Only for people in public service"
        ],
        correctAnswer: "No — a stable, values-aligned life is presented as a legitimate, successful outcome regardless of a specific net-worth number",
        explanation: "This course explicitly avoids treating wealth accumulation as the only measure of a successful life."
      }
    ],
    sourceIds: ["sec-compound-interest-calc", "cfpb-your-money-your-goals", "frb-scf"],
    achievementId: "long-game-planner",
    unlocks: null,
    accessibilitySummary: "Simulator inputs are standard accessible form controls with numeric labels; results are shown in an accessible text summary alongside any chart.",
    reviewedDate: "2026-07-10"
  }
];
