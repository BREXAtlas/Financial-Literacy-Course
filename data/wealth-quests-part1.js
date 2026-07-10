// Ram Ready Financial Futures — Future Wealth Quest, Tier I & Tier II (q01-q10)
// Advanced, optional path. Wealth tiers describe SYSTEMS to understand, not a
// ranking of human worth. All real-world examples are fictional composites.

export const QUESTS_PART1 = [
  {
    id: "q01",
    tier: 1,
    title: "A Million Dollars Is a Balance Sheet, Not a Pile of Cash",
    subtitle: "What 'net worth' actually counts, and why it isn't spendable cash",
    estimatedMinutes: 14,
    learningObjectives: [
      "Define net worth as assets minus liabilities, not cash on hand",
      "Distinguish liquid assets from illiquid assets",
      "Explain why retirement accounts, home equity, and business equity count toward net worth but aren't easily spent",
      "Recognize that taxes and debt reduce what a stated net worth figure actually represents"
    ],
    openingNarrative: "The word 'millionaire' conjures an image of a vault of cash. This quest opens that vault and finds something different: a spreadsheet. Wealth at this level is a system of ownership, not a stack of bills — and understanding that system, not admiring it, is the point of this path.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt: "A composite household reports a $1.2 million net worth. Their assets: a $380,000 home (with a $210,000 mortgage), $340,000 in a 401(k), $90,000 in a taxable brokerage account, $60,000 in a business they co-own, and $18,000 in checking and savings. How should a learner interpret this household's ability to cover a sudden $15,000 expense?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Assume they can easily cover it — they're worth over a million dollars",
        whyChosen: "Net worth headlines are the only number most people ever see.",
        possibleBenefit: "None — this framing is a common misunderstanding, not a strategy.",
        possibleCost: "Misjudging this household's actual liquidity.",
        possibleRisk: "Applying the same wrong assumption to one's own future net worth.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "A learner who assumes net worth equals spendable cash may make poor comparisons throughout the rest of this path.",
        whatCouldChangeThisOutcome: "Reviewing the actual balance sheet line by line instead of the headline number.",
        sourceIds: ["frb-scf"] },
      { id: "b", text: "Look at only the checking and savings balance to judge liquidity",
        whyChosen: "Cash accounts are the most obviously spendable asset category.",
        possibleBenefit: "This is the most accurate quick check available here.",
        possibleCost: "Ignores that a brokerage account, while less liquid than cash, can often be sold within days.",
        possibleRisk: "Underestimating available resources if a taxable brokerage sale is realistic.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "A learner who starts with true liquidity builds an accurate habit for evaluating any balance sheet, including their own.",
        whatCouldChangeThisOutcome: "Adding the brokerage account (minus estimated taxes on any gains) to the true liquidity picture.",
        sourceIds: ["frb-scf", "sec-investing-basics"] },
      { id: "c", text: "Add checking, savings, and a realistic estimate of what could be sold quickly from the brokerage account, after estimated taxes",
        whyChosen: "This reflects both what's accessible and what selling would actually cost.",
        possibleBenefit: "Closest to a true liquidity picture for this household.",
        possibleCost: "Requires more effort and some assumptions about tax treatment.",
        possibleRisk: "Selling investments to cover an emergency can trigger taxes and interrupt a long-term plan.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "This habit — separating 'on paper' wealth from 'available' wealth — carries through every remaining quest.",
        whatCouldChangeThisOutcome: "Whether the household has a separate emergency fund so investments never have to be sold under pressure.",
        sourceIds: ["frb-scf", "sec-investing-basics"] }
    ],
    immediateConsequences: {
      a: "The learner's mental model of 'millionaire' stays inaccurate going into later quests.",
      b: "The learner gets a usable, if incomplete, liquidity estimate.",
      c: "The learner builds the most accurate estimate, at the cost of more work."
    },
    oneYearConsequences: {
      a: "Misjudging liquidity repeatedly can lead to poor comparisons when evaluating other households or opportunities later in this path.",
      b: "A cash-only view undersells real flexibility but rarely causes a bad decision by itself.",
      c: "An accurate liquidity habit transfers directly to the learner's own future financial decisions."
    },
    longTermConsequences: {
      a: "Continuing to equate net worth with spendable cash can lead to poor comparisons of career or ownership decisions in adulthood.",
      b: "A conservative liquidity habit is safe but may undervalue real options in a real financial life.",
      c: "An accurate, tax-aware liquidity habit is the single most transferable skill in this entire wealth-tier path."
    },
    recoveryPath: "Any learner can revisit this scenario and recompute the household's liquidity picture using the balance-sheet breakdown provided — there is no wrong starting guess, only an incomplete one.",
    conceptExplanation: {
      what: "Net worth is total assets minus total liabilities at a point in time. It is a snapshot, not a cash balance.",
      why: "Net worth exists as a measure because it captures both what is owned and what is owed, unlike income alone.",
      how: "It may help by giving a fuller picture of financial position than salary or lifestyle alone suggests.",
      cost: "Calculating it accurately takes effort: valuing a home, a business, or retirement accounts is not exact.",
      risks: "Treating net worth as spendable cash, or comparing net worth figures without adjusting for debt and taxes, can be misleading.",
      whoMayBenefit: "Anyone trying to track real financial progress over time, regardless of income level.",
      whoMayNotBenefit: "Someone whose net worth is concentrated in one illiquid asset may get limited insight from the headline number alone.",
      misunderstandingRisk: "Assuming a stated net worth is available to spend, gift, or borrow against without cost or delay.",
      verifyNote: "Household wealth distribution data changes over time — check the Federal Reserve's Survey of Consumer Finances for current figures."
    },
    realWorldExample: "A composite small-business owner in this quest has a $1.4 million net worth, but $900,000 of it is equity in their own company. When a family emergency requires $40,000 in cash, they cannot simply withdraw it — they must borrow against the business or use a line of credit, incurring interest they hadn't planned for.",
    knowledgeChecks: [
      { id: "kc1", question: "Which of these best describes net worth?", type: "multiple_choice",
        options: ["Total cash in checking and savings", "Total assets minus total liabilities", "Annual salary before taxes", "The value of a person's home only"],
        correctAnswer: "Total assets minus total liabilities",
        explanation: "Net worth is a balance-sheet concept: everything owned, minus everything owed." },
      { id: "kc2", question: "Why might a household with a $1 million net worth struggle to cover a $10,000 emergency?", type: "multiple_choice",
        options: ["Net worth figures are usually fake", "Most of their net worth may be in illiquid assets like home equity or retirement accounts", "A million dollars is not actually a large amount", "Emergencies only affect people with low net worth"],
        correctAnswer: "Most of their net worth may be in illiquid assets like home equity or retirement accounts",
        explanation: "Illiquid assets take time, cost, or penalties to convert to cash — the headline number doesn't reflect that." }
    ],
    sourceIds: ["frb-scf", "sec-investing-basics"],
    achievementId: "systems-thinker",
    unlocks: "q02",
    accessibilitySummary: "Text-based balance sheet scenario with no timed elements; all figures also presented in a plain list format for screen readers.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q02",
    tier: 1,
    title: "High Income Versus Durable Wealth",
    subtitle: "Why a large paycheck and a large net worth are not the same thing",
    estimatedMinutes: 13,
    learningObjectives: [
      "Distinguish income from wealth accumulation",
      "Identify how lifestyle inflation can erase a high income's advantage",
      "Compare salary, bonus, and equity compensation as different risk profiles",
      "Explain how concentration and career risk affect high earners specifically"
    ],
    openingNarrative: "A high salary buys options. It does not automatically build wealth. This quest follows two composite professionals earning similar six-figure incomes down very different net-worth paths — and asks {{name}} to figure out why.",
    personalizationSlots: ["q02.context"],
    approvedStoryFragments: ["q02.context"],
    scenario: {
      prompt: "Two composite professionals each earn $180,000 a year. One saves and invests 20% of gross income consistently; the other spends close to their full take-home pay on an upgraded lifestyle, assuming raises will 'catch up' their savings later. Which factor most determines their net worth gap after 15 years?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "The size of their salary",
        whyChosen: "Salary is the most visible number, so it's tempting to credit it with everything.",
        possibleBenefit: "None — both professionals have the same salary in this scenario.",
        possibleCost: "Missing the actual driver of the wealth gap.",
        possibleRisk: "Assuming a high salary alone guarantees wealth.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Overweighting income and underweighting behavior tends to persist into real financial decisions.",
        whatCouldChangeThisOutcome: "Comparing their actual saving rates side by side.",
        sourceIds: ["frb-scf"] },
      { id: "b", text: "Their consistent saving and investing rate over time",
        whyChosen: "Saving rate is the one factor that clearly differs between them in this scenario.",
        possibleBenefit: "Identifies the real lever available to almost anyone, regardless of income level.",
        possibleCost: "Requires acknowledging that lifestyle choices, not just income, drive outcomes.",
        possibleRisk: "Oversimplifying — market returns, taxes, and career stability also matter.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "A learner who identifies saving rate as a primary driver can apply that insight regardless of their own future income level.",
        whatCouldChangeThisOutcome: "A market downturn, a job loss, or a health event could change either person's trajectory regardless of saving rate.",
        sourceIds: ["frb-scf", "sec-investing-basics"] },
      { id: "c", text: "Luck in the stock market",
        whyChosen: "Market returns do affect outcomes and are a real factor.",
        possibleBenefit: "Correctly acknowledges that returns are not guaranteed or controlled by the individual.",
        possibleCost: "Overweighting luck ignores the behavioral difference that's actually driving this specific scenario.",
        possibleRisk: "Concluding that saving doesn't matter because markets are 'random.'",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "Market returns matter over a full career, but in this scenario the two professionals face the same market — the difference is behavior.",
        whatCouldChangeThisOutcome: "If both professionals invested identically, market returns would then become the dominant remaining variable.",
        sourceIds: ["sec-investing-basics"] }
    ],
    immediateConsequences: {
      a: "The learner overlooks the actual driver of the wealth gap in this scenario.",
      b: "The learner identifies saving rate as the key behavioral lever.",
      c: "The learner partially credits an external factor that isn't actually the differentiator here."
    },
    oneYearConsequences: {
      a: "Continuing to equate salary with wealth can lead to disappointment when a raise doesn't translate into savings.",
      b: "Recognizing saving rate as a lever supports realistic planning at any income level.",
      c: "Overweighting luck can lead to under-saving on the assumption that outcomes are out of one's control."
    },
    longTermConsequences: {
      a: "A high earner who never examines saving behavior may reach retirement age with limited assets despite decades of strong income.",
      b: "A disciplined saving rate, sustained over a career, is one of the most reliable levers in personal finance, though not the only one.",
      c: "Market returns matter over decades, but attributing outcomes to luck alone can discourage saving that would still help."
    },
    recoveryPath: "The learner can revisit the scenario and model a third composite professional who raises their saving rate mid-career after a wake-up moment, to see how much of the gap can still close.",
    conceptExplanation: {
      what: "Lifestyle inflation is the tendency to increase spending as income rises, often keeping the savings rate flat or declining.",
      why: "It happens because visible affordability (a bigger apartment, a newer car) rises faster than awareness of the tradeoff being made.",
      how: "Avoiding it may help preserve a stable or rising saving rate as income grows.",
      cost: "Consciously resisting lifestyle inflation can mean delaying upgrades that peers with similar income are making.",
      risks: "An income can disappear (job loss, disability, career change) while an inflated lifestyle's fixed costs remain.",
      whoMayBenefit: "Anyone experiencing an income increase, from a first job to a major promotion.",
      whoMayNotBenefit: "Someone who has historically under-spent may reasonably choose to increase spending on things they value without it being 'inflation' in a harmful sense.",
      misunderstandingRisk: "Believing that a bigger paycheck automatically means more financial security.",
      verifyNote: "General wealth and savings-rate patterns can be cross-checked against Federal Reserve household survey data."
    },
    realWorldExample: "A composite mid-career engineer earning $210,000 a year maintains the same modest apartment and car from their $60,000-a-year first job, directing the difference into retirement and brokerage accounts. A composite peer at the same salary upgrades housing, vehicles, and travel with every raise and reaches age 45 with substantial income history but minimal savings.",
    knowledgeChecks: [
      { id: "kc1", question: "What is 'lifestyle inflation'?", type: "multiple_choice",
        options: ["A government measure of the cost of living", "Spending that rises alongside income, often reducing the saving rate", "A tax on high earners", "A type of investment fund"],
        correctAnswer: "Spending that rises alongside income, often reducing the saving rate",
        explanation: "Lifestyle inflation describes rising spending that tracks income growth, which can keep net worth flat despite a bigger paycheck." },
      { id: "kc2", question: "In the scenario, what most explained the net worth gap between two equally paid professionals?", type: "multiple_choice",
        options: ["One had a better employer", "One had a higher saving and investing rate", "One paid lower taxes", "One had a college degree and the other did not"],
        correctAnswer: "One had a higher saving and investing rate",
        explanation: "Both earned the same salary; the consistent saving and investing behavior was the differentiator in this composite scenario." }
    ],
    sourceIds: ["frb-scf", "sec-investing-basics"],
    achievementId: "income-vs-wealth-analyst",
    unlocks: "q03",
    accessibilitySummary: "Comparison scenario presented as parallel text columns with a list-based alternative to any visual chart.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q03",
    tier: 1,
    title: "Athlete, Entertainer, and Creator Income Shock",
    subtitle: "Short earning windows, irregular income, and the work of making it last",
    estimatedMinutes: 16,
    learningObjectives: [
      "Explain why athletic and entertainment careers often have short or uncertain earning windows",
      "Identify risks specific to irregular, lump-sum, or royalty-based income",
      "Recognize the roles of agents, managers, and family financial pressure in this income pattern",
      "Compare a short high-earning career to a long stable-earning career on total lifetime wealth"
    ],
    openingNarrative: "Fame and a big contract look like financial security from the outside. This quest goes inside three fictional composite careers — none of them real people — to see what actually determines whether that money lasts.",
    personalizationSlots: ["q03.context"],
    approvedStoryFragments: ["q03.context"],
    scenario: {
      prompt: "A composite professional athlete signs a contract paying $2.4 million a year for an expected 4-year career, with real risk of injury ending it early. A composite salaried professional earns $140,000 a year over a stable 35-year career. Both want to retire comfortably. What is the athlete's single biggest planning challenge that the salaried professional does not face in the same way?",
      type: "rank_tradeoffs"
    },
    choices: [
      { id: "a", text: "The athlete earns more money overall, so they have no real challenge",
        whyChosen: "Total contract value looks larger than a lifetime of salaried income at first glance.",
        possibleBenefit: "None — this understates the athlete's actual risk.",
        possibleCost: "Missing the compressed timeline and the risk of early career-ending injury.",
        possibleRisk: "Assuming high peak earnings alone solve retirement planning.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Athletes and entertainers who don't plan for a compressed, uncertain earning window are more likely to face financial strain after the career ends.",
        whatCouldChangeThisOutcome: "Comparing total lifetime earnings potential, not just peak annual pay.",
        sourceIds: ["bls-ooh"] },
      { id: "b", text: "The athlete must fund a full retirement from a compressed, uncertain earning window, often under public and family financial pressure",
        whyChosen: "This captures the actual structural difference between the two income patterns.",
        possibleBenefit: "Identifies the real planning challenge: saving and investing aggressively during a short, uncertain window.",
        possibleCost: "Requires the athlete to save at a much higher rate than the salaried professional during their active years.",
        possibleRisk: "Injury, poor advice, fraud, or family financial requests can derail even a well-planned short career.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "Recognizing the compressed-window challenge supports realistic planning for anyone with irregular or front-loaded income.",
        whatCouldChangeThisOutcome: "Access to trustworthy financial professionals and disciplined saving from the very first contract.",
        sourceIds: ["bls-ooh", "sec-working-with-professional"] },
      { id: "c", text: "The athlete pays no taxes, so their money goes further",
        whyChosen: "A misconception sometimes repeated informally.",
        possibleBenefit: "None — this is factually incorrect and not a real tradeoff.",
        possibleCost: "Athletes and entertainers generally face complex, often multi-state tax obligations, not tax exemption.",
        possibleRisk: "Under-planning for a large tax obligation on a lump sum.",
        immediateEffect: { financialKnowledge: 0 },
        futureEffect: "Misunderstanding tax obligations on irregular income can create serious financial and legal problems.",
        whatCouldChangeThisOutcome: "Working with a qualified tax professional familiar with multi-state and self-employment income.",
        sourceIds: ["irs-filing"] }
    ],
    immediateConsequences: {
      a: "The learner misses the compressed-timeline risk unique to short high-earning careers.",
      b: "The learner correctly identifies the core planning challenge for this income pattern.",
      c: "The learner adopts an inaccurate belief about how taxes apply to this kind of income."
    },
    oneYearConsequences: {
      a: "Underestimating this risk can lead to poor advice or overconfidence when evaluating similar income patterns later in life.",
      b: "This insight supports realistic planning for any short-window or irregular-income situation, athletic or otherwise.",
      c: "Carrying a false belief about taxes into any future gig, contract, or lump-sum income situation could cause real financial harm."
    },
    longTermConsequences: {
      a: "A learner who never grasps the compressed-window risk may underestimate why some celebrated careers end in financial hardship.",
      b: "This lesson generalizes to anyone with irregular income: contractors, seasonal workers, commission-based sales, and creators.",
      c: "An uncorrected tax misconception carried into real life could result in serious underpayment penalties."
    },
    recoveryPath: "The learner can revisit the comparison and adjust the athlete's assumed saving rate to see what rate would be needed to fund a comparable retirement — reinforcing that the challenge is solvable with early, aggressive planning.",
    conceptExplanation: {
      what: "Income shock describes a large, sudden change in earnings — including a large gain that later drops sharply, as is common in short athletic or entertainment careers.",
      why: "Some careers concentrate nearly all lifetime earnings into a short window due to physical demands, trend cycles, or limited market size.",
      how: "Recognizing this pattern early may help someone in such a career save and invest more aggressively during the peak years.",
      cost: "Preparing for income shock often means living well below the peak income during the highest-earning years, which can be socially and personally difficult.",
      risks: "Injury, changing trends, poor advice, fraud, family financial pressure, and lack of planning can all erode a short-window income.",
      whoMayBenefit: "Athletes, performers, creators, and anyone with a foreseeably short or irregular high-earning window.",
      whoMayNotBenefit: "Someone with stable, long-duration income faces a different set of planning priorities, not this specific risk.",
      misunderstandingRisk: "Assuming a large contract or viral success guarantees lasting financial security without active planning.",
      verifyNote: "Career-length and earnings-pattern data for specific professions can be checked against Bureau of Labor Statistics occupational data where available."
    },
    realWorldExample: "Vignette 1 (athlete): A composite professional athlete earns peak income for 5 years before a career-ending injury, and must fund the next 50 years from that window. Vignette 2 (performer): A composite musician has one viral year of royalty income followed by a decade of unpredictable, much smaller earnings. Vignette 3 (stable comparison): A composite teacher earns modestly but consistently for 30 years and retires with a pension and steady retirement savings — illustrating that a long, stable window can outperform a short, dramatic one in total retirement security.",
    knowledgeChecks: [
      { id: "kc1", question: "Why do some athletic or entertainment careers create unique financial planning challenges?", type: "multiple_choice",
        options: ["Because those careers pay too little", "Because they often compress most lifetime earnings into a short, uncertain window", "Because those careers are not real jobs", "Because entertainers don't pay taxes"],
        correctAnswer: "Because they often compress most lifetime earnings into a short, uncertain window",
        explanation: "The core challenge is funding a normal-length retirement from an abnormally short and uncertain earning period." },
      { id: "kc2", question: "What is one honest comparison this quest draws between a short high-earning career and a long stable career?", type: "multiple_choice",
        options: ["The short career is always better financially", "The long stable career is always better financially", "Either can lead to strong or weak retirement outcomes depending on saving behavior and planning", "Stable careers never involve financial risk"],
        correctAnswer: "Either can lead to strong or weak retirement outcomes depending on saving behavior and planning",
        explanation: "Neither path guarantees an outcome — behavior, planning, and circumstances determine the result in both cases." }
    ],
    sourceIds: ["bls-ooh", "sec-working-with-professional", "irs-filing"],
    achievementId: "income-shock-navigator",
    unlocks: "q04",
    accessibilitySummary: "Three short text vignettes presented sequentially with headings; no autoplaying media, no flashing content.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q04",
    tier: 1,
    title: "Business Equity and Scale",
    subtitle: "Revenue, profit, valuation, and why a big number on paper isn't cash in hand",
    estimatedMinutes: 14,
    learningObjectives: [
      "Distinguish revenue from profit and cash flow",
      "Explain how equity, dilution, and partners affect ownership value",
      "Describe how a business valuation differs from money actually received",
      "Identify concentration risk in business ownership"
    ],
    openingNarrative: "{{name}} has pictured what a growing business might feel like. This quest shows what the numbers actually mean once a business scales — and why a headline valuation is often the least useful number in the room.",
    personalizationSlots: ["q04.context"],
    approvedStoryFragments: ["q04.context"],
    scenario: {
      prompt: "A composite founder's company reports $4 million in annual revenue and is valued by investors at $20 million. The founder personally takes home $95,000 a year in salary, and the company's actual profit after expenses is $310,000. A friend calls the founder a multimillionaire. How accurate is that framing?",
      type: "identify_missing_information"
    },
    choices: [
      { id: "a", text: "Fully accurate — the company is worth $20 million",
        whyChosen: "The valuation number is the most publicly visible figure.",
        possibleBenefit: "None — this ignores liquidity, ownership percentage, and how valuations are estimated.",
        possibleCost: "Overstating the founder's actual accessible wealth.",
        possibleRisk: "The founder or others around them making spending decisions based on an illiquid, uncertain figure.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "This misunderstanding is common and can lead to real financial strain if acted on.",
        whatCouldChangeThisOutcome: "Understanding the founder's actual ownership percentage and how the valuation was calculated.",
        sourceIds: ["sec-investing-basics"] },
      { id: "b", text: "Partially accurate at best — valuation is an estimate, ownership percentage matters, and it isn't liquid cash",
        whyChosen: "This accounts for how private valuations work and what they don't represent.",
        possibleBenefit: "Gives an appropriately cautious and accurate read on the founder's financial position.",
        possibleCost: "Less satisfying than a simple headline, but more useful.",
        possibleRisk: "None specific to choosing accuracy here.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "Applying this same caution to any reported company valuation — one's own or someone else's — supports better decisions.",
        whatCouldChangeThisOutcome: "An actual sale, investment round, or liquidity event would test whether the valuation holds up.",
        sourceIds: ["sec-investing-basics"] },
      { id: "c", text: "Not accurate at all — the company's revenue is the only real number",
        whyChosen: "Revenue is a concrete, reported figure.",
        possibleBenefit: "Correctly skeptical of the valuation number.",
        possibleCost: "Dismisses that equity value, while imprecise, is not meaningless.",
        possibleRisk: "Undervaluing legitimate ownership stakes because they aren't cash.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "A learner who dismisses equity value entirely may misjudge legitimate business wealth later.",
        whatCouldChangeThisOutcome: "Recognizing that equity has real, if uncertain and illiquid, value." }
    ],
    immediateConsequences: {
      a: "The learner overstates the founder's real financial position.",
      b: "The learner arrives at the most accurate, appropriately uncertain read.",
      c: "The learner swings too far toward dismissing legitimate equity value."
    },
    oneYearConsequences: {
      a: "Overstating illiquid wealth can lead to poor spending or lending decisions based on a number that isn't real cash.",
      b: "This calibrated skepticism transfers well to evaluating any privately held business.",
      c: "Dismissing equity value entirely could cause a learner to undervalue their own or a partner's real ownership stake."
    },
    longTermConsequences: {
      a: "A founder (or someone who trusts a founder's paper wealth) who treats valuation as spendable cash risks real financial strain.",
      b: "This calibrated view of valuation versus cash is a durable skill for evaluating any business, public or private.",
      c: "Fully dismissing equity value could discourage reasonable long-term reinvestment in a growing business."
    },
    recoveryPath: "The learner can revisit the scenario with a different ownership percentage or a lower valuation multiple to see how the founder's real position shifts.",
    conceptExplanation: {
      what: "A business valuation is an estimate of what a company might be worth, often based on revenue multiples, comparable sales, or investor negotiation — not a fixed or guaranteed amount.",
      why: "Valuations exist to help investors, founders, and lenders make decisions, but they are estimates, not settled facts.",
      how: "Understanding revenue, profit, cash flow, and valuation separately may help a business owner or observer judge real financial position.",
      cost: "Getting an accurate valuation (through an appraisal, banker, or sale process) takes time, expertise, and money.",
      risks: "A valuation can drop sharply if the market, industry, or company performance changes, and dilution from new investors reduces an owner's percentage.",
      whoMayBenefit: "Business owners, employees with equity compensation, and anyone evaluating a company's reported worth.",
      whoMayNotBenefit: "Someone needing cash immediately may find equity value offers little practical help without a sale or loan.",
      misunderstandingRisk: "Treating a company's valuation as equivalent to the owner's spendable net worth.",
      verifyNote: "Private valuations are not publicly regulated the way public securities prices are — treat any single valuation figure as one estimate among several possible ones."
    },
    realWorldExample: "A composite startup founder owns 40% of a company valued at $20 million after a funding round, giving a paper stake of $8 million. After three more funding rounds bringing in new investors, the founder's ownership percentage falls to 22% due to dilution — even as the company's total valuation grows.",
    knowledgeChecks: [
      { id: "kc1", question: "What does a private company valuation represent?", type: "multiple_choice",
        options: ["Guaranteed cash available to the owner", "An estimate of worth, often based on comparables or negotiation", "The total revenue collected that year", "A number set permanently by the government"],
        correctAnswer: "An estimate of worth, often based on comparables or negotiation",
        explanation: "Valuations are estimates, not fixed or guaranteed cash amounts." },
      { id: "kc2", question: "What is 'dilution' in the context of business ownership?", type: "multiple_choice",
        options: ["A decrease in a company's total revenue", "A reduction in an existing owner's percentage stake when new shares or investors are added", "A type of business loan", "A tax paid on business profit"],
        correctAnswer: "A reduction in an existing owner's percentage stake when new shares or investors are added",
        explanation: "Dilution happens when new ownership is issued, spreading the same company value across more shares or partners." }
    ],
    sourceIds: ["sec-investing-basics"],
    achievementId: "equity-and-scale-analyst",
    unlocks: "q05",
    accessibilitySummary: "Numeric scenario presented as a labeled list rather than a chart; all figures readable by screen readers.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q05",
    tier: 1,
    title: "Build the Team, Keep the Judgment",
    subtitle: "What CPAs, attorneys, planners, and advisers actually do — and don't do",
    estimatedMinutes: 15,
    learningObjectives: [
      "Identify the roles and limits of common financial and legal professionals",
      "Explain how credentials, fees, and conflicts of interest differ across professional types",
      "Describe how to check a professional's disciplinary history",
      "Recognize that hiring professionals does not remove personal financial responsibility"
    ],
    openingNarrative: "As financial complexity grows, so does the cast of professionals who might help manage it. This quest is a field guide to who does what — and a reminder that hiring help is not the same as handing over judgment.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt: "A composite business owner is choosing which professional to consult first about restructuring their business and reducing tax exposure. Match each professional to the role most central to their training and license.",
      type: "match_term_to_meaning"
    },
    choices: [
      { id: "a", text: "Start with a financial planner for a full life-goals conversation before any legal or tax decisions",
        whyChosen: "Planners often help clarify goals before specialists get involved.",
        possibleBenefit: "Can align tax and legal decisions with the owner's actual life goals.",
        possibleCost: "May add a step before reaching the professional with direct expertise in entity structure or tax law.",
        possibleRisk: "A planner without the right credentials or fiduciary standard may not act in the owner's best interest.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "Starting with goals tends to produce more coherent decisions across all specialists consulted afterward.",
        whatCouldChangeThisOutcome: "Verifying the planner's credentials and fiduciary status before relying on their guidance.",
        sourceIds: ["sec-working-with-professional"] },
      { id: "b", text: "Go directly to a CPA and an attorney, since the question involves tax and entity structure specifically",
        whyChosen: "CPAs and attorneys have direct expertise in tax law and legal entity structure.",
        possibleBenefit: "Gets specific, credentialed expertise on the exact question asked.",
        possibleCost: "Without a broader planning conversation, decisions may optimize taxes without considering other goals.",
        possibleRisk: "A CPA and attorney working separately, without coordination, could give conflicting advice.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "Matching the professional to the specific question is efficient but works best when advisors coordinate.",
        whatCouldChangeThisOutcome: "Whether the CPA and attorney communicate directly with each other and the owner together.",
        sourceIds: ["irs-llc", "sba-choose-structure"] },
      { id: "c", text: "Rely on an online forum's advice instead of a licensed professional to save on fees",
        whyChosen: "Fees for professional advice can be a genuine barrier, especially early on.",
        possibleBenefit: "No direct cost and can raise useful questions to ask later.",
        possibleCost: "General forum advice cannot account for this specific business's facts and jurisdiction.",
        possibleRisk: "Acting on generic or incorrect advice for tax or legal structure can create real financial and legal exposure.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Treating informal advice as a substitute for licensed professional guidance increases the odds of a costly mistake.",
        whatCouldChangeThisOutcome: "Using informal research to prepare better questions for a licensed professional, not to replace one." }
    ],
    immediateConsequences: {
      a: "The learner takes a values-first approach before engaging specialists.",
      b: "The learner matches expertise directly to the question, gaining efficient but potentially uncoordinated advice.",
      c: "The learner substitutes informal advice for licensed expertise on a consequential decision."
    },
    oneYearConsequences: {
      a: "A goals-first approach tends to produce decisions the owner feels good about a year later, even if it took longer.",
      b: "Specific expert advice resolves the immediate question but may need to be revisited if goals shift.",
      c: "Decisions based on informal advice may need to be redone with a licensed professional, at added cost and stress."
    },
    longTermConsequences: {
      a: "Coordinated, goals-first professional relationships tend to compound in value as complexity grows.",
      b: "Efficient but uncoordinated advice can eventually produce conflicting structures that are costly to unwind.",
      c: "Relying on unlicensed advice for structural or tax decisions carries real long-term legal and financial risk."
    },
    recoveryPath: "A learner who chooses option c can revisit the scenario and see what questions a CPA or attorney would actually ask — reinforcing the value of licensed expertise without shame.",
    conceptExplanation: {
      what: "A financial 'team' can include a CPA, attorney, financial planner, investment adviser, broker, insurance professional, banker, bookkeeper, business manager, and estate-planning professional — each with distinct training, licensing, and scope.",
      why: "Financial and legal systems are complex enough that no single professional is licensed or trained in all of it.",
      how: "Matching the right professional to the right question, and having them coordinate, may produce more coherent outcomes.",
      cost: "Professional fees vary widely — hourly, flat, retainer, or a percentage of assets — and should be understood before engaging.",
      risks: "Conflicts of interest (like commission-based compensation) can shape the advice given; disciplinary history should be checked.",
      whoMayBenefit: "Anyone facing a complex tax, legal, business, or investment decision, at any wealth level.",
      whoMayNotBenefit: "Someone with very simple finances may not need a full team, though basic verification habits still apply to any professional they do use.",
      misunderstandingRisk: "Assuming that hiring a professional removes the need to understand or question the advice given.",
      verifyNote: "Check any investment professional's background using FINRA BrokerCheck or the SEC's Investment Adviser Public Disclosure database before engaging."
    },
    realWorldExample: "A composite family business owner hires a CPA who recommends a tax strategy, an attorney who structures the entity, and a fee-only financial planner who checks that both recommendations still serve the family's long-term goals. When the CPA and attorney's initial recommendations conflict slightly, the planner facilitates a joint call that resolves it before either the paperwork is filed.",
    knowledgeChecks: [
      { id: "kc1", question: "Why might it matter whether a financial adviser is a fiduciary?", type: "multiple_choice",
        options: ["Fiduciaries charge lower fees automatically", "A fiduciary is legally required to act in the client's best interest", "Only fiduciaries are allowed to sell insurance", "It doesn't matter — all advisers follow the same standard"],
        correctAnswer: "A fiduciary is legally required to act in the client's best interest",
        explanation: "Fiduciary duty is a specific legal standard; not all financial professionals are held to it in every context." },
      { id: "kc2", question: "Where can someone check a broker's disciplinary history?", type: "multiple_choice",
        options: ["A personal blog", "FINRA BrokerCheck", "A company's own marketing website", "There is no way to check this"],
        correctAnswer: "FINRA BrokerCheck",
        explanation: "FINRA BrokerCheck is a free, public tool for checking a broker's background and disciplinary history." }
    ],
    sourceIds: ["sec-working-with-professional", "finra-brokercheck", "sec-adviser-info"],
    achievementId: "professional-team-builder",
    unlocks: "q06",
    accessibilitySummary: "Matching scenario presented as a plain-text list with roles and descriptions, fully navigable by keyboard.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q06",
    tier: 2,
    title: "Private Banking — Service, Credit, and Fees",
    subtitle: "What 'private' actually buys, and what it doesn't guarantee",
    estimatedMinutes: 14,
    learningObjectives: [
      "Distinguish private banking, wealth management, brokerage, and custody services",
      "Explain how private banking fees, lending, and concierge services work",
      "Identify deposit-insurance limits and how they apply even to large accounts",
      "Recognize that 'private' service does not mean guaranteed safety or returns"
    ],
    openingNarrative: "The phrase 'private banking' sounds like a different, safer financial universe. This quest treats it as what it actually is: a service tier, with real costs, real limits, and the same underlying risks as any other financial account.",
    personalizationSlots: ["q06.context"],
    approvedStoryFragments: ["q06.context"],
    scenario: {
      prompt: "A composite client with $6 million in assets is offered 'private banking' services, including a dedicated relationship manager, preferential loan rates, and concierge scheduling. The client assumes their full $6 million is now protected by deposit insurance because of the private relationship. Evaluate this assumption.",
      type: "detect_misleading_claim"
    },
    choices: [
      { id: "a", text: "The assumption is correct — private banking includes unlimited deposit protection",
        whyChosen: "The word 'private' can imply special protection.",
        possibleBenefit: "None — this assumption is factually incorrect.",
        possibleCost: "A false sense of security about deposit safety.",
        possibleRisk: "Holding uninsured deposits without realizing the exposure.",
        immediateEffect: { financialKnowledge: 0 },
        futureEffect: "Carrying this misunderstanding could lead to real deposit losses if an institution fails.",
        whatCouldChangeThisOutcome: "Reviewing actual FDIC or NCUA insurance limits and how they apply per account category.",
        sourceIds: ["fdic-deposit-insurance"] },
      { id: "b", text: "The assumption is incorrect — deposit insurance limits still apply regardless of the private relationship",
        whyChosen: "Deposit insurance rules are set by regulation, not by service tier.",
        possibleBenefit: "Accurately identifies real exposure and allows the client to plan around it (for example, spreading deposits across institutions or account categories).",
        possibleCost: "Requires additional structuring or acceptance of some uninsured exposure.",
        possibleRisk: "None from recognizing the limit — the risk exists either way; only awareness of it changes.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "This awareness supports better structuring of large deposits regardless of future wealth level.",
        whatCouldChangeThisOutcome: "Using multiple institutions, account ownership categories, or insured cash-sweep programs to expand coverage.",
        sourceIds: ["fdic-deposit-insurance", "ncua-share-insurance"] },
      { id: "c", text: "It doesn't matter either way, since private banks never fail",
        whyChosen: "Large, established institutions can feel implicitly guaranteed.",
        possibleBenefit: "None — bank failures, while uncommon, do happen at institutions of all sizes.",
        possibleCost: "Overconfidence in institutional safety regardless of deposit insurance.",
        possibleRisk: "Significant loss if an uninsured deposit is at an institution that does fail.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "This belief leaves large depositors exposed to a real, if infrequent, risk.",
        whatCouldChangeThisOutcome: "Reviewing that deposit insurance exists precisely because institutions can and occasionally do fail." }
    ],
    immediateConsequences: {
      a: "The learner carries forward a materially incorrect belief about deposit protection.",
      b: "The learner correctly separates 'private service' from 'deposit insurance,' two unrelated things.",
      c: "The learner underestimates a real, if infrequent, institutional risk."
    },
    oneYearConsequences: {
      a: "This misunderstanding could lead to real financial loss if ever tested by an institution's failure.",
      b: "Correctly separating these concepts supports safer structuring of any large deposit, private banking or not.",
      c: "Overconfidence in institutional permanence can leave large uninsured balances exposed unnecessarily."
    },
    longTermConsequences: {
      a: "A large depositor who never corrects this belief carries real, avoidable risk indefinitely.",
      b: "This distinction — service tier versus insurance protection — is one of the most practically useful facts in the entire wealth-tier path.",
      c: "Institutional failure is uncommon but not impossible; unexamined assumptions about permanence can be costly when it happens."
    },
    recoveryPath: "The learner can revisit the scenario and model how the client could restructure the $6 million across multiple institutions or account categories to maximize insured coverage.",
    conceptExplanation: {
      what: "Private banking is a service tier — typically a dedicated relationship manager, preferential rates, and lending or concierge services — offered to clients with substantial assets. It is distinct from wealth management (investment advice), brokerage (trading and custody of securities), and custody services (safekeeping of assets).",
      why: "These services exist because managing complex, larger portfolios and relationships benefits from dedicated staff and negotiated terms.",
      how: "They may help simplify complex financial lives and provide access to preferential lending terms.",
      cost: "Private banking often comes with account minimums, relationship fees, and negotiated (not universal) rates.",
      risks: "Deposit insurance limits apply the same way regardless of service tier; fees and conflicts of interest still exist; 'private' does not mean risk-free.",
      whoMayBenefit: "Clients with complex, substantial financial lives who value dedicated service and are aware of what it does and doesn't include.",
      whoMayNotBenefit: "Someone assuming the service itself provides extra government-backed protection is operating on a false premise.",
      misunderstandingRisk: "Confusing a premium service tier with expanded deposit insurance or guaranteed investment safety.",
      verifyNote: "FDIC and NCUA deposit insurance limits and rules are set by regulation and are publicly documented; SIPC protects securities accounts differently than deposit insurance protects bank accounts."
    },
    realWorldExample: "A composite client keeps $4 million in a single private banking relationship, assuming the 'private' label implies full protection. After learning about FDIC per-depositor, per-institution limits, their advisor helps restructure the funds across several insured account categories and institutions, keeping the relationship but reducing uninsured exposure.",
    knowledgeChecks: [
      { id: "kc1", question: "Does a 'private banking' relationship change the deposit insurance limits on an account?", type: "multiple_choice",
        options: ["Yes, private accounts are fully insured regardless of amount", "No, standard deposit insurance limits and rules still apply", "Only for business accounts", "Only if the bank is foreign-owned"],
        correctAnswer: "No, standard deposit insurance limits and rules still apply",
        explanation: "Deposit insurance is set by regulation based on depositor, institution, and account category — not by service tier." },
      { id: "kc2", question: "What does SIPC protect against?", type: "multiple_choice",
        options: ["Investment losses from market decline", "The failure of a brokerage firm holding a customer's securities and cash, within limits", "Bad investment advice", "Identity theft"],
        correctAnswer: "The failure of a brokerage firm holding a customer's securities and cash, within limits",
        explanation: "SIPC does not protect against market losses — it addresses brokerage firm failure, within defined limits." }
    ],
    sourceIds: ["fdic-deposit-insurance", "ncua-share-insurance", "sipc-protection"],
    achievementId: "private-banking-decoder",
    unlocks: "q07",
    accessibilitySummary: "Claim-evaluation scenario presented in plain text with explicit correct/incorrect reasoning, no reliance on color coding.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q07",
    tier: 2,
    title: "An Investment Policy Is a Decision System",
    subtitle: "Goals, risk, and rules — written down before emotions get involved",
    estimatedMinutes: 13,
    learningObjectives: [
      "Explain the purpose of a written investment policy",
      "Identify the core inputs: goals, liquidity needs, time horizon, and risk capacity",
      "Describe the role of diversification, rebalancing, and documented governance",
      "Recognize that no single asset allocation is universally correct"
    ],
    openingNarrative: "As portfolios grow more complex, a written decision system starts to matter more than any single investment choice. This quest is about the process, not a recommended allocation.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt: "A composite family with a growing portfolio is deciding how to make future investment decisions. Compare relying on informal, in-the-moment judgment calls versus adopting a written investment policy statement covering goals, risk capacity, and rebalancing rules.",
      type: "rank_tradeoffs"
    },
    choices: [
      { id: "a", text: "Continue making decisions informally as opportunities or fears arise",
        whyChosen: "Feels flexible and responsive to changing conditions.",
        possibleBenefit: "Can react quickly to a specific opportunity or concern.",
        possibleCost: "Decisions may be inconsistent and harder to evaluate over time.",
        possibleRisk: "Emotional reactions to market swings can drive costly buying or selling at the wrong time.",
        immediateEffect: { financialKnowledge: 2 },
        futureEffect: "Informal decision-making tends to produce less consistent outcomes as a portfolio grows more complex.",
        whatCouldChangeThisOutcome: "Documenting even a simple set of guiding principles can reduce emotional decision-making.",
        sourceIds: ["sec-investing-basics"] },
      { id: "b", text: "Adopt a written investment policy statement covering goals, time horizon, risk capacity, and rebalancing rules",
        whyChosen: "Provides a documented reference point to return to during market stress or family disagreement.",
        possibleBenefit: "Supports consistent, goal-aligned decisions and clearer communication among family members or advisors.",
        possibleCost: "Requires upfront time and honest conversations about goals and risk tolerance.",
        possibleRisk: "A policy written once and never revisited can become outdated as goals or circumstances change.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "A documented policy tends to reduce reactive, emotionally driven decisions during volatile periods.",
        whatCouldChangeThisOutcome: "Scheduling a regular review (for example, annually) keeps the policy aligned with actual goals.",
        sourceIds: ["sec-investing-basics"] },
      { id: "c", text: "Copy a well-known investor's public allocation exactly",
        whyChosen: "Borrowing a strategy from someone perceived as successful can feel like a shortcut.",
        possibleBenefit: "May introduce useful diversification ideas.",
        possibleCost: "That allocation was built for different goals, time horizon, and risk capacity than this family's.",
        possibleRisk: "A mismatched allocation could expose the family to more risk or less liquidity than they can actually tolerate.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "A borrowed strategy that doesn't match personal circumstances can create a mismatch that surfaces during a downturn.",
        whatCouldChangeThisOutcome: "Using outside ideas as input to, not a replacement for, a personally tailored policy." }
    ],
    immediateConsequences: {
      a: "The family retains flexibility but risks inconsistency.",
      b: "The family establishes a documented, revisitable decision framework.",
      c: "The family adopts a strategy that may not fit their actual circumstances."
    },
    oneYearConsequences: {
      a: "Informal decisions may work out or may not — consistency is the main casualty either way.",
      b: "A documented policy tends to reduce panic-driven decisions during the year's inevitable market swings.",
      c: "A mismatched borrowed strategy may perform well or poorly, independent of whether it fits this family's actual needs."
    },
    longTermConsequences: {
      a: "Without documentation, it becomes hard to evaluate whether past decisions were sound or simply lucky.",
      b: "A periodically reviewed investment policy tends to support more resilient long-term outcomes and clearer family governance.",
      c: "A strategy copied without regard to personal goals and risk capacity may eventually create a painful mismatch."
    },
    recoveryPath: "A family that started informally can write a policy at any point — the discipline of writing it down retroactively still improves future decisions.",
    conceptExplanation: {
      what: "An investment policy statement is a written document defining goals, time horizon, liquidity needs, risk capacity, target diversification, rebalancing rules, and governance for a portfolio.",
      why: "It exists to separate long-term decision-making from short-term emotional reactions to market movements.",
      how: "It may help by giving a documented reference point during volatile periods and clarifying roles among family members or advisors.",
      cost: "Developing one requires honest, sometimes difficult conversations about goals, risk tolerance, and priorities.",
      risks: "A policy that is never revisited can become misaligned with changing life circumstances or goals.",
      whoMayBenefit: "Any household or family managing a portfolio complex enough to benefit from documented rules, at any wealth level.",
      whoMayNotBenefit: "Someone with a very simple, small portfolio may reasonably use a lighter-weight version of this process.",
      misunderstandingRisk: "Believing there is one universally correct allocation that applies regardless of individual goals and risk capacity.",
      verifyNote: "General investing principles like diversification and rebalancing are described at Investor.gov; no specific allocation is endorsed here."
    },
    realWorldExample: "A composite family writes a policy stating they need 18 months of expenses in cash, will not exceed a defined equity allocation given their risk capacity, and will rebalance annually regardless of market sentiment. During a sharp market downturn, the documented rebalancing rule — rather than emotion — guides their decision, and they avoid selling into the decline.",
    knowledgeChecks: [
      { id: "kc1", question: "What is the main purpose of a written investment policy statement?", type: "multiple_choice",
        options: ["To guarantee a specific investment return", "To document goals, risk capacity, and rules so decisions are consistent rather than reactive", "To avoid paying any investment fees", "To qualify for tax benefits"],
        correctAnswer: "To document goals, risk capacity, and rules so decisions are consistent rather than reactive",
        explanation: "The policy is a decision framework, not a return guarantee." },
      { id: "kc2", question: "Why might copying a well-known investor's public allocation be risky?", type: "multiple_choice",
        options: ["Public allocations are always illegal to copy", "Their allocation was built for their own goals, time horizon, and risk capacity, which may not match yours", "Well-known investors never disclose their allocations", "It's not risky at all"],
        correctAnswer: "Their allocation was built for their own goals, time horizon, and risk capacity, which may not match yours",
        explanation: "An allocation only makes sense in the context of the specific goals and risk capacity it was built for." }
    ],
    sourceIds: ["sec-investing-basics"],
    achievementId: "investment-policy-architect",
    unlocks: "q08",
    accessibilitySummary: "Text-based tradeoff comparison with no time pressure; all content available without relying on visual charts.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q08",
    tier: 2,
    title: "Private Investments and Illiquidity",
    subtitle: "Private equity, venture capital, and the cost of money you can't get back quickly",
    estimatedMinutes: 14,
    learningObjectives: [
      "Define private equity, venture capital, private credit, and real estate partnerships at an introductory level",
      "Explain lockups, valuation uncertainty, and accredited-investor rules",
      "Identify manager risk and fraud risk in private investments",
      "Evaluate illiquidity as a cost, not simply a feature to accept without question"
    ],
    openingNarrative: "Private investments are often described in exclusive, glamorous terms. This quest treats them plainly: as one category of investment with real structural costs, chief among them the inability to get money back quickly.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt: "A composite investor is offered a stake in a private equity fund with a 10-year lockup period and no ability to withdraw early. The pitch emphasizes strong historical returns of similar funds. What should the investor weigh most heavily before committing?",
      type: "compare_total_cost"
    },
    choices: [
      { id: "a", text: "The historical returns figure alone",
        whyChosen: "Past performance is the number most often highlighted in a pitch.",
        possibleBenefit: "None — past performance of similar funds does not guarantee this fund's future results.",
        possibleCost: "May lead to overweighting a single, backward-looking figure.",
        possibleRisk: "Committing illiquid capital based on a number that may not repeat.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Overweighting historical returns is a common mistake across all types of investing, not just private funds.",
        whatCouldChangeThisOutcome: "Reviewing the fund's actual fee structure, manager track record across multiple funds, and the investor's own liquidity needs.",
        sourceIds: ["sec-investing-basics"] },
      { id: "b", text: "Whether the investor can afford to have this money fully inaccessible for the entire lockup period, regardless of returns",
        whyChosen: "Liquidity risk is the defining structural feature of this investment type.",
        possibleBenefit: "Ensures the investor isn't forced into a bad position by an unexpected need for cash.",
        possibleCost: "May mean passing on the investment even if the return potential looks attractive.",
        possibleRisk: "None from asking this question — it's a foundational check before considering anything else.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "Prioritizing liquidity needs before return potential supports sound decisions across any illiquid investment.",
        whatCouldChangeThisOutcome: "A change in the investor's other liquid assets or expected future cash needs.",
        sourceIds: ["sec-investing-basics"] },
      { id: "c", text: "Whether the fund manager is accredited-investor eligible themselves",
        whyChosen: "Accredited-investor rules are part of the private-investment landscape.",
        possibleBenefit: "Shows awareness of a real regulatory concept.",
        possibleCost: "Misapplies the concept — accredited-investor rules describe who may invest, not the manager's own status.",
        possibleRisk: "Focusing on the wrong verification step while missing real liquidity and manager-risk questions.",
        immediateEffect: { financialKnowledge: 2 },
        futureEffect: "Misunderstanding accredited-investor rules could lead to overlooking more relevant risk factors.",
        whatCouldChangeThisOutcome: "Clarifying that accredited-investor status applies to the investor, and manager due diligence is a separate, additional step." }
    ],
    immediateConsequences: {
      a: "The learner focuses on a backward-looking figure that may not predict future results.",
      b: "The learner identifies the most structurally important question for this investment type.",
      c: "The learner applies a real regulatory concept incorrectly."
    },
    oneYearConsequences: {
      a: "Historical-return focus, unchecked, can lead to disappointment if the fund's actual results differ.",
      b: "A liquidity-first framework helps the investor avoid being forced into a poor position regardless of how the fund performs.",
      c: "A misapplied understanding of accredited-investor rules could resurface in a future, higher-stakes decision."
    },
    longTermConsequences: {
      a: "Chasing historical returns across illiquid investments without regard to lockups can create a portfolio that's mismatched to the investor's actual life needs.",
      b: "A liquidity-first evaluation habit is one of the most protective habits an investor at this wealth tier can build.",
      c: "Misunderstanding key regulatory concepts can lead to skipped due diligence on the questions that actually matter."
    },
    recoveryPath: "The learner can revisit the scenario with a different lockup length or a different portion of the investor's liquid net worth committed, to see how the risk calculus shifts.",
    conceptExplanation: {
      what: "Private investments — private equity, venture capital, private credit, and real estate partnerships — are ownership or lending stakes in assets not traded on public markets.",
      why: "These structures exist to fund businesses, projects, or real estate that don't fit public market financing, often in exchange for potentially higher, but uncertain, returns.",
      how: "They may help diversify a portfolio beyond public stocks and bonds for investors who can accept illiquidity and added risk.",
      cost: "Capital is often locked up for years, fees can be higher than public funds, and valuations between events are estimates, not market prices.",
      risks: "Manager risk (the fund's operator underperforming or acting improperly), valuation uncertainty, and outright fraud are all real possibilities in private markets.",
      whoMayBenefit: "Investors who meet applicable eligibility rules, understand the illiquidity, and can afford to have that capital inaccessible for years.",
      whoMayNotBenefit: "Someone who may need access to that capital sooner than the lockup period allows, regardless of eligibility status.",
      misunderstandingRisk: "Assuming a private investment's stated valuation between events reflects an amount that could actually be received if sold.",
      verifyNote: "Accredited-investor eligibility rules are set by securities regulation and should be verified with a licensed professional before any private investment."
    },
    realWorldExample: "A composite investor commits $250,000 to a venture capital fund with a 10-year term. In year 6, a family emergency creates an urgent need for cash, but the investment cannot be sold or withdrawn early — illustrating that even a fund with strong reported performance can create real hardship if liquidity needs aren't planned for separately.",
    knowledgeChecks: [
      { id: "kc1", question: "What is a 'lockup period' in a private investment?", type: "multiple_choice",
        options: ["A grace period before fees start", "A span of time during which an investor cannot withdraw their capital", "A period when the fund is closed to new investors", "A tax filing deadline"],
        correctAnswer: "A span of time during which an investor cannot withdraw their capital",
        explanation: "Lockups are a defining structural feature of many private investments and a core source of liquidity risk." },
      { id: "kc2", question: "Why is a private fund's stated valuation between liquidity events considered uncertain?", type: "multiple_choice",
        options: ["Because it is set by government regulation", "Because it is typically an estimate, not a price confirmed by an actual sale", "Because private funds are required to overstate their value", "It isn't uncertain — private valuations are always exact"],
        correctAnswer: "Because it is typically an estimate, not a price confirmed by an actual sale",
        explanation: "Without a public market or completed sale, private valuations remain estimates until an actual transaction occurs." }
    ],
    sourceIds: ["sec-investing-basics"],
    achievementId: "illiquidity-analyst",
    unlocks: "q09",
    accessibilitySummary: "Scenario and explanation presented in plain sequential text; no countdown timers or time-pressured elements.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q09",
    tier: 2,
    title: "Tax Complexity and Entity Discipline",
    subtitle: "Multiple income types, careful records, and where the line is drawn",
    estimatedMinutes: 14,
    learningObjectives: [
      "Explain why multiple income types and entities increase tax complexity",
      "Identify the role of payroll, estimated taxes, and recordkeeping in avoiding problems",
      "Distinguish legitimate tax planning from tax evasion",
      "Recognize that hiding assets or falsifying records is illegal, not a legitimate strategy"
    ],
    openingNarrative: "More income sources and more entities mean more moving parts at tax time. This quest is about the discipline that keeps complexity legal and manageable — and draws a firm line around what is never acceptable.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt: "A composite business owner has W-2 salary from their own company, 1099 consulting income, rental income from a property, and capital gains from investments. An acquaintance suggests they could simply not report some cash consulting income since 'no one would notice.' How should the owner respond?",
      type: "detect_misleading_claim"
    },
    choices: [
      { id: "a", text: "Take the suggestion — if it's cash and unlikely to be noticed, it's a low-risk way to reduce taxes",
        whyChosen: "Cash transactions can feel less traceable.",
        possibleBenefit: "None — this describes tax evasion, which is illegal regardless of traceability.",
        possibleCost: "Real legal risk, including penalties, interest, and potential criminal charges.",
        possibleRisk: "Audits, whistleblower reports, or financial institution reporting can surface unreported income.",
        immediateEffect: { financialKnowledge: 0, integrity: -4 },
        futureEffect: "Unreported income creates ongoing legal exposure that can surface years later.",
        whatCouldChangeThisOutcome: "There is no version of this choice that becomes acceptable — all income must be reported regardless of form.",
        sourceIds: ["irs-filing"] },
      { id: "b", text: "Decline, report all income accurately, and work with a CPA to identify legitimate deductions and entity structuring",
        whyChosen: "This keeps the owner fully compliant while still using legal tools to manage tax liability.",
        possibleBenefit: "Full legal compliance and access to legitimate tax planning strategies.",
        possibleCost: "Requires more diligent recordkeeping and possibly higher near-term tax payments than evasion would produce.",
        possibleRisk: "None from following the law; legitimate planning still requires the diligence of good records.",
        immediateEffect: { financialKnowledge: 6, integrity: 4 },
        futureEffect: "Accurate reporting and legitimate planning protect the business and owner from legal and financial risk long-term.",
        whatCouldChangeThisOutcome: "Working with a qualified CPA to explore every legitimate deduction and entity option available.",
        sourceIds: ["irs-filing", "irs-llc"] },
      { id: "c", text: "Report the income but keep no supporting records to save time",
        whyChosen: "Recordkeeping can feel like an unnecessary burden when the income itself is reported.",
        possibleBenefit: "Saves time in the short term.",
        possibleCost: "Makes it difficult to substantiate deductions or respond to any future inquiry.",
        possibleRisk: "An audit without adequate records can result in disallowed deductions and penalties even when income was honestly reported.",
        immediateEffect: { financialKnowledge: 3 },
        futureEffect: "Poor recordkeeping can turn an honest tax filing into a costly problem if ever reviewed.",
        whatCouldChangeThisOutcome: "Adopting basic bookkeeping habits, even simple ones, to support whatever is filed." }
    ],
    immediateConsequences: {
      a: "The owner commits tax evasion, a serious legal violation.",
      b: "The owner remains fully compliant while legitimately managing tax liability.",
      c: "The owner reports honestly but creates unnecessary future risk through poor records."
    },
    oneYearConsequences: {
      a: "Unreported income remains a legal and financial liability that does not expire quickly.",
      b: "Legitimate planning, sustained over time, can meaningfully reduce tax liability within the law.",
      c: "Missing records may not cause a problem in a given year, but the risk compounds if ever reviewed."
    },
    longTermConsequences: {
      a: "Tax evasion carries risk of audits, penalties, interest, and potential criminal prosecution — it is never a legitimate long-term strategy.",
      b: "Disciplined, honest reporting combined with legitimate planning is the only sustainable long-term approach at any income complexity level.",
      c: "A pattern of poor recordkeeping can eventually undermine an otherwise fully honest tax history."
    },
    recoveryPath: "This is a firm-line topic: there is no 'better version' of evasion to explore. The recovery path is a lesson on how to find a qualified CPA to make legitimate planning routine going forward.",
    conceptExplanation: {
      what: "Tax complexity grows with the number of income types (W-2, 1099, rental, capital gains) and entities (sole proprietorship, LLC, corporation) a person has.",
      why: "The tax system requires different reporting and payment mechanisms for different income types, including estimated taxes for self-employment and rental income.",
      how: "Careful records, timely estimated payments, and a qualified CPA may help someone stay compliant and identify legitimate deductions.",
      cost: "Recordkeeping and professional fees take time and money, especially as complexity grows.",
      risks: "Poor records can turn honest filings into audit problems; failing to make estimated payments can trigger penalties even without any wrongdoing.",
      whoMayBenefit: "Anyone with multiple income types or business entities, regardless of total income level.",
      whoMayNotBenefit: "Someone with simple W-2-only income has less need for this level of structure, though good records still help.",
      misunderstandingRisk: "Believing that unreported cash income is a legitimate or low-risk way to reduce taxes. It is not — this is evasion and illegal.",
      verifyNote: "Tax rules, forms, and deadlines change; consult IRS.gov and a qualified tax professional for current requirements."
    },
    realWorldExample: "A composite consultant with W-2, 1099, and rental income works with a CPA to make quarterly estimated payments and track deductible expenses with receipts and a simple ledger. When a minor discrepancy triggers an IRS inquiry two years later, the maintained records resolve it without penalty.",
    knowledgeChecks: [
      { id: "kc1", question: "Is failing to report cash income because 'no one would notice' a legitimate tax strategy?", type: "multiple_choice",
        options: ["Yes, if the amount is small", "No — all income must be reported regardless of form or traceability", "Yes, if it's under a certain dollar threshold", "Only self-employed people have to report cash income"],
        correctAnswer: "No — all income must be reported regardless of form or traceability",
        explanation: "Unreported income is tax evasion, a serious violation, regardless of amount or likelihood of detection." },
      { id: "kc2", question: "Why does recordkeeping matter even when income is reported honestly?", type: "multiple_choice",
        options: ["It doesn't matter if income is reported honestly", "Records substantiate deductions and protect against problems in an audit", "Records are only required for businesses over a certain size", "The IRS keeps all necessary records automatically"],
        correctAnswer: "Records substantiate deductions and protect against problems in an audit",
        explanation: "Good records support any deductions claimed and protect an honest filer if their return is ever reviewed." }
    ],
    sourceIds: ["irs-filing", "irs-llc"],
    achievementId: "tax-discipline-analyst",
    unlocks: "q10",
    accessibilitySummary: "Scenario framed with an explicit ethical line stated in plain text, avoiding any ambiguity dependent on tone or color.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q10",
    tier: 2,
    title: "Estate, Trust, Beneficiary, and Giving Basics",
    subtitle: "Passing on assets thoughtfully — and why 'a trust fixes everything' is a myth",
    estimatedMinutes: 15,
    learningObjectives: [
      "Define wills, trusts, beneficiaries, and powers of attorney at a general level",
      "Explain probate and guardianship in plain terms",
      "Compare charitable giving tools including donor-advised funds and private foundations",
      "Recognize that trusts and life insurance are tools with specific purposes, not universal solutions"
    ],
    openingNarrative: "{{name}} may not have thought much about estate planning yet — most people don't until it's urgent. This quest introduces the vocabulary early, at the moment in this path where it starts to matter.",
    personalizationSlots: ["q10.context"],
    approvedStoryFragments: ["q10.context"],
    scenario: {
      prompt: "A composite couple is told by an acquaintance that 'putting everything in a trust' will automatically avoid all estate taxes and eliminate the need for a will. Evaluate this claim before they act on it.",
      type: "detect_misleading_claim"
    },
    choices: [
      { id: "a", text: "Accept the claim and set up a trust without further legal advice",
        whyChosen: "The claim sounds definitive and simple.",
        possibleBenefit: "None — the claim overstates what a trust automatically accomplishes.",
        possibleCost: "A poorly structured trust may not achieve the couple's actual goals, and other documents may still be needed.",
        possibleRisk: "Gaps in planning (like no will for assets outside the trust, or no power of attorney) could cause real problems later.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "Incomplete estate planning based on an oversimplified claim can create confusion or disputes for heirs.",
        whatCouldChangeThisOutcome: "Consulting an estate-planning attorney to see what the couple's specific situation actually requires.",
        sourceIds: ["irs-estate-gift-tax"] },
      { id: "b", text: "Consult an estate-planning attorney to understand what a trust would and wouldn't accomplish for their specific situation",
        whyChosen: "Estate planning tools have specific, situation-dependent purposes, not universal effects.",
        possibleBenefit: "Produces a plan tailored to the couple's actual assets, goals, and family situation.",
        possibleCost: "Professional fees and time to complete proper planning.",
        possibleRisk: "None from seeking qualified advice; the risk lies in skipping it.",
        immediateEffect: { financialKnowledge: 6 },
        futureEffect: "Properly tailored estate planning tends to reduce confusion, cost, and conflict for heirs.",
        whatCouldChangeThisOutcome: "Revisiting the plan after major life changes like a new child, marriage, or significant asset change.",
        sourceIds: ["irs-estate-gift-tax"] },
      { id: "c", text: "Do nothing, assuming estate planning is only necessary for extremely wealthy people",
        whyChosen: "Estate planning can feel irrelevant if a couple doesn't consider themselves wealthy.",
        possibleBenefit: "Saves time and cost in the near term.",
        possibleCost: "Without a will or powers of attorney, state default rules — not the couple's own wishes — determine what happens.",
        possibleRisk: "Family disputes, delays, or outcomes the couple would not have chosen for themselves.",
        immediateEffect: { financialKnowledge: 2 },
        futureEffect: "Basic estate documents like a will and power of attorney matter regardless of wealth level.",
        whatCouldChangeThisOutcome: "Recognizing that even modest estates benefit from basic legal documents." }
    ],
    immediateConsequences: {
      a: "The couple may end up with an incomplete plan built on a false premise.",
      b: "The couple gets a plan actually suited to their situation.",
      c: "The couple leaves their affairs to default state rules rather than their own choices."
    },
    oneYearConsequences: {
      a: "Gaps discovered later may require costly corrections.",
      b: "A properly built plan gives the couple and their family clarity going forward.",
      c: "Without documents in place, any unexpected event during the year could create real hardship for the family."
    },
    longTermConsequences: {
      a: "An estate plan built on a false premise can create confusion, delay, or unintended outcomes for heirs.",
      b: "A properly tailored, periodically reviewed estate plan tends to serve a family's actual wishes far more reliably.",
      c: "Estate planning applies at every wealth level; going without it means state default rules decide outcomes instead of the family."
    },
    recoveryPath: "At any point, the couple can consult a qualified estate-planning attorney to build or correct their plan — there is no point at which it becomes 'too late' to start.",
    conceptExplanation: {
      what: "Estate planning tools include wills (directing asset distribution), trusts (legal arrangements holding assets under specific terms), beneficiary designations, powers of attorney (authorizing someone to act on your behalf), and guardianship designations for dependents.",
      why: "These tools exist to let people direct what happens to their assets and dependents according to their own wishes, rather than default state rules.",
      how: "They may help avoid probate delays, reduce family conflict, and ensure dependents are cared for as intended.",
      cost: "Proper estate planning requires legal fees and periodic review as circumstances change.",
      risks: "A trust or life insurance policy set up incorrectly, or without other necessary documents, may not accomplish the intended goal.",
      whoMayBenefit: "Anyone with assets, dependents, or specific wishes for what happens if they become incapacitated or pass away — not only the wealthy.",
      whoMayNotBenefit: "Someone with extremely simple affairs and no dependents may need a lighter version of this planning, though basic documents like a will and power of attorney still generally help.",
      misunderstandingRisk: "Believing that any single tool (a trust, a life insurance policy) automatically eliminates taxes or the need for other planning documents.",
      verifyNote: "Estate and gift tax rules and exclusion amounts change over time — verify current rules at IRS.gov and with a qualified estate-planning attorney."
    },
    realWorldExample: "A composite family sets up a trust believing it alone will handle everything, but later learns through an attorney that they still needed a pour-over will, updated beneficiary designations on retirement accounts, and a power of attorney for healthcare decisions — the trust was one piece of a larger, coordinated plan.",
    knowledgeChecks: [
      { id: "kc1", question: "Does setting up a trust automatically eliminate the need for a will?", type: "multiple_choice",
        options: ["Yes, always", "No — a will and other documents may still be needed depending on the situation", "Only in some states", "Trusts and wills serve the exact same purpose"],
        correctAnswer: "No — a will and other documents may still be needed depending on the situation",
        explanation: "Trusts and wills serve related but distinct purposes; a complete estate plan often needs both, along with other documents." },
      { id: "kc2", question: "Is estate planning relevant only to extremely wealthy people?", type: "multiple_choice",
        options: ["Yes, only for multimillionaires", "No — basic documents like a will and power of attorney matter at nearly any wealth level", "Only for people with children", "Only for people over age 65"],
        correctAnswer: "No — basic documents like a will and power of attorney matter at nearly any wealth level",
        explanation: "Estate planning basics protect anyone's wishes and dependents, regardless of total asset level." }
    ],
    sourceIds: ["irs-estate-gift-tax"],
    achievementId: "estate-and-giving-navigator",
    unlocks: "q11",
    accessibilitySummary: "Scenario and explanation in plain sequential text; legal terms defined inline without requiring outside lookup.",
    reviewedDate: "2026-07-10"
  }
];
