// Ram Ready Financial Futures — Financial Foundations Story
// Episodes 1–10 (Act I: Starting Your Financial Life / Act II: Handling Real Life)
// All content is prewritten and reviewed. Personalization only assembles
// approved fragments (data/story-fragments.js) at the listed slot ids — it
// never invents facts, numbers, or consequences. See docs/PERSONALIZATION_MODEL.md.

export const EPISODES_PART1 = [
  {
    id: "ep01",
    act: 1,
    title: "Your Future, Your Values",
    subtitle: "Money decisions are values decisions",
    estimatedMinutes: 10,
    learningObjectives: [
      "Distinguish wants, needs, values, and tradeoffs in a real decision",
      "Separate financial goals from broader life goals",
      "Explain why wealth is one possible measure of success, not the only one",
      "Describe how an early choice can interact with choices made later"
    ],
    openingNarrative:
      "{{name}} just moved into a dorm at Angelo State, and the excitement of a first semester is already colliding with a stack of decisions nobody warned {{object}} about.",
    personalizationSlots: ["ep01.opening_detail"],
    approvedStoryFragments: ["ep01.opening_detail"],
    scenario: {
      prompt:
        "In the first two weeks, {{name}} is invited to join an unpaid research lab (great for a resume, no pay), offered extra shifts at a campus job (steady cash, less study time), asked to join a club with a $60 due, and sees a friend group planning a weekend trip. There isn't time or money for all of it.",
      type: "rank_tradeoffs"
    },
    choices: [
      {
        id: "a",
        text: "Prioritize the unpaid research lab for long-term career value",
        whyChosen: "Some learners value building credentials and relationships even without immediate pay.",
        possibleBenefit: "Resume-building experience and a faculty relationship that can lead to references or opportunities.",
        possibleCost: "No income from those hours, and less time for paid work or coursework.",
        possibleRisk: "Time invested may not pay off if the opportunity doesn't lead anywhere concrete.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 2, wellbeing: 1 },
        futureEffect: "This may strengthen a future resume or graduate school application, though outcomes vary widely by field.",
        whatCouldChangeThisOutcome: "Whether the lab later offers paid work, a strong reference, or co-authorship changes how this investment pays off.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "b",
        text: "Take the extra paid shifts instead",
        whyChosen: "Some learners prioritize current cash flow, especially with upcoming expenses.",
        possibleBenefit: "More immediate income to cover costs or build savings.",
        possibleCost: "Fewer hours for studying, clubs, or unpaid opportunities.",
        possibleRisk: "Overloading work hours can affect grades or wellbeing over a full semester.",
        immediateEffect: { cashOnHand: 120, financialKnowledge: 1, wellbeing: -1 },
        futureEffect: "Extra income now may ease short-term pressure but could reduce time for relationship- or credential-building.",
        whatCouldChangeThisOutcome: "If the job offers skills or references relevant to a future career, the tradeoff looks different than a purely transactional shift.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Join the club and budget carefully for the trip too",
        whyChosen: "Some learners weigh belonging, friendship, and community as part of a full life, not just finances.",
        possibleBenefit: "Social connection and a sense of belonging that can support wellbeing and retention.",
        possibleCost: "The $60 due and trip costs reduce available cash for other goals.",
        possibleRisk: "Spending on social belonging can crowd out savings if not planned for.",
        immediateEffect: { cashOnHand: -110, financialKnowledge: 1, wellbeing: 2 },
        futureEffect: "Strong social ties are linked to persistence in college, though they don't show up on a balance sheet.",
        whatCouldChangeThisOutcome: "Whether the trip and club fees are one-time costs or recurring changes how sustainable this choice is.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "d",
        text: "Do a partial version of each — a few lab hours, one extra shift, skip the trip",
        whyChosen: "Some learners prefer spreading limited time and money across several values rather than maximizing one.",
        possibleBenefit: "No single value is abandoned entirely.",
        possibleCost: "Slower progress on any one goal compared to focusing fully on it.",
        possibleRisk: "Spreading too thin can mean nothing gets enough attention to matter.",
        immediateEffect: { cashOnHand: 40, financialKnowledge: 2, wellbeing: 1 },
        futureEffect: "A balanced approach may reduce regret but can also delay meaningful progress on any single goal.",
        whatCouldChangeThisOutcome: "As the semester goes on, {{name}} can revisit this balance based on what's actually working.",
        sourceIds: ["cfpb-your-money-your-goals"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} spends the first week learning lab protocols and meeting the research team — no pay hits the account.",
      b: "{{name}}'s next pay period reflects the added hours, and the extra cash is a relief.",
      c: "{{name}} pays club dues and books a spot on the trip, watching the checking account balance drop.",
      d: "{{name}}'s week is full but nothing feels neglected — and nothing feels fully invested either."
    },
    oneYearConsequences: {
      a: "A year in, {{name}} has a letter of recommendation and a clearer sense of a research-based career path.",
      b: "A year in, {{name}} has more savings but fewer extracurricular connections than some classmates.",
      c: "A year in, {{name}} has a strong friend group but had to rebuild savings after a lean semester.",
      d: "A year in, {{name}} has modest progress across several fronts and a clearer sense of which value matters most going forward."
    },
    longTermConsequences: {
      a: "This path may open doors in research- or credential-driven fields, though it isn't the only route to those outcomes.",
      b: "Consistent paid work builds a financial cushion, which supports flexibility for future decisions regardless of career path.",
      c: "Strong relationships and belonging often support long-term persistence and wellbeing, alongside — not instead of — financial planning.",
      d: "Learning to rebalance priorities over time is itself a durable skill, useful well beyond this one semester."
    },
    recoveryPath:
      "Every path here can be adjusted next semester — dropping a commitment, picking up hours, or renegotiating time doesn't erase progress already made.",
    conceptExplanation: {
      what: "Financial literacy starts with recognizing that money decisions are really values decisions: every dollar and every hour represents a choice about what matters.",
      why: "Understanding your own values helps you make consistent decisions instead of reacting to whatever feels urgent that week.",
      how: "Naming a value (like stability, community, or ownership) before a decision makes tradeoffs easier to evaluate honestly.",
      cost: "Being deliberate about values takes time and reflection that can feel slower than just reacting to circumstances.",
      risks: "Values can conflict with each other, and no framework removes the discomfort of choosing between two good things.",
      whoMayBenefit: "Anyone facing competing demands on time and money, which is most people, most of the time.",
      whoMayNotBenefit: "Someone in a genuine emergency may need to act before values-based reflection is realistic — and that's a normal, human response, not a failure.",
      misunderstandingRisk: "Treating 'financial goals' and 'life goals' as the same thing can lead to chasing a number that doesn't actually reflect what a person wants from life.",
      verifyNote: "This is a general decision-making framework, not financial advice tailored to any individual's circumstances."
    },
    realWorldExample:
      "Jordan, a fictional first-year mass media major, took an unpaid internship over a higher-paying retail job because Jordan valued a specific industry connection. A year later, that connection led to a paid role — but Jordan also acknowledges it could easily have not worked out, and that the retail income would have been just as legitimate a choice. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which statement best reflects this episode's core idea?",
        type: "multiple_choice",
        options: [
          "There is one correct way to spend limited time and money in college.",
          "Financial decisions are also values decisions, and different values can lead to equally reasonable choices.",
          "Unpaid opportunities are always worth more than paid work.",
          "Wealth is the only meaningful measure of a good decision."
        ],
        correctAnswer: "Financial decisions are also values decisions, and different values can lead to equally reasonable choices.",
        explanation: "This episode is built around comparing tradeoffs, not ranking choices as objectively better or worse."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals"],
    achievementId: "future-caster",
    unlocks: "ep02",
    accessibilitySummary:
      "This episode introduces values-based decision-making using a scenario about competing time and money demands in a first college semester.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep02",
    act: 1,
    title: "Where Money Lives",
    subtitle: "Banks, credit unions, and choosing an account you can trust",
    estimatedMinutes: 12,
    calculatorType: "bankFee",
    learningObjectives: [
      "Compare banks and credit unions as places to hold money",
      "Distinguish checking and savings accounts by purpose",
      "Identify common fees, minimum balances, overdrafts, and holds",
      "Explain FDIC and NCUA coverage at a general level",
      "Describe how to verify that an institution is regulated or insured"
    ],
    openingNarrative:
      "{{name}} has a financial aid refund and a first paycheck both about to land, and needs somewhere real to put them.",
    personalizationSlots: ["ep02.banking_detail"],
    approvedStoryFragments: ["ep02.banking_detail"],
    scenario: {
      prompt:
        "{{name}} is comparing a large national bank with a monthly fee that's waived under conditions, a local credit union with no monthly fee but fewer branches, and a mobile-first digital bank with strong app features but no physical branch nearby.",
      type: "compare_total_cost"
    },
    choices: [
      {
        id: "a",
        text: "Choose the large national bank",
        whyChosen: "Some learners prioritize branch access and brand familiarity.",
        possibleBenefit: "Widespread ATMs and branches, useful while traveling or moving between cities.",
        possibleCost: "A monthly maintenance fee applies unless a minimum balance or direct deposit condition is met.",
        possibleRisk: "Missing the fee-waiver condition in a lean month adds an avoidable cost.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 2 },
        futureEffect: "Consistently meeting waiver conditions can make this effectively free; missing them repeatedly adds up over a year.",
        whatCouldChangeThisOutcome: "Setting up direct deposit or checking the exact waiver terms can eliminate this fee entirely.",
        sourceIds: ["cfpb-bank-accounts", "fdic-deposit-insurance"]
      },
      {
        id: "b",
        text: "Choose the local credit union",
        whyChosen: "Some learners prioritize lower fees and member-owned structure.",
        possibleBenefit: "No monthly maintenance fee and often more favorable terms on small loans later.",
        possibleCost: "Fewer branch and ATM locations, which can matter while traveling.",
        possibleRisk: "Membership eligibility rules vary by institution and sometimes require verification.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 2 },
        futureEffect: "Lower ongoing fees can mean more money stays in the account over time compared to a fee-bearing option.",
        whatCouldChangeThisOutcome: "Checking NCUA insurance status confirms deposits are protected the same way FDIC protects bank deposits.",
        sourceIds: ["ncua-share-insurance", "cfpb-bank-accounts"]
      },
      {
        id: "c",
        text: "Choose the mobile-first digital bank",
        whyChosen: "Some learners prioritize a strong app experience and no physical banking needs.",
        possibleBenefit: "Often no monthly fees and useful budgeting features built into the app.",
        possibleCost: "No in-person help for complex problems like disputes or fraud recovery.",
        possibleRisk: "Learners should confirm the digital bank partners with an FDIC-insured institution before depositing money.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 2 },
        futureEffect: "A well-verified digital bank can work well for someone who rarely needs a branch.",
        whatCouldChangeThisOutcome: "Verifying FDIC-insured partner-bank status through FDIC BankFind removes the biggest open question.",
        sourceIds: ["fdic-bankfind", "fdic-deposit-insurance"]
      },
      {
        id: "d",
        text: "Open two accounts — a credit union for savings, a digital bank for daily spending",
        whyChosen: "Some learners prefer splitting purposes across institutions.",
        possibleBenefit: "Lower fees on savings and strong app tools for daily spending tracking.",
        possibleCost: "More accounts to monitor and potentially more places fraud could occur.",
        possibleRisk: "Forgetting about a low-activity account can lead to missed fee changes or dormant-account issues.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 3 },
        futureEffect: "Splitting accounts by purpose is a common strategy once someone is comfortable managing more than one login.",
        whatCouldChangeThisOutcome: "As balances grow, {{name}} may consolidate or add a third account for a specific goal.",
        sourceIds: ["cfpb-bank-accounts", "ncua-share-insurance"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} deposits both the refund and paycheck and gets a debit card within days.",
      b: "{{name}} completes a short membership application, since credit unions serve defined membership groups.",
      c: "{{name}} opens the account in minutes from a phone, with no in-person paperwork.",
      d: "{{name}} sets up two logins and a simple rule for what goes where."
    },
    oneYearConsequences: {
      a: "{{name}} has paid a fee in a couple of months where the waiver condition wasn't met.",
      b: "{{name}} has paid no maintenance fees and used a credit union small-dollar loan once, at a lower rate than a typical credit card cash advance.",
      c: "{{name}} has managed everything from an app but had to escalate one fraud dispute entirely online.",
      d: "{{name}} has a clear separation between spending and saving money, which supported consistent saving."
    },
    longTermConsequences: {
      a: "Large banks can offer convenience for people who travel or relocate often, at the cost of fees if conditions aren't tracked.",
      b: "Credit unions can offer strong value for people who bank locally and don't need many branches, but membership and services can be more limited.",
      c: "Digital banks can work well for tech-comfortable users who verify insurance status, but not everyone wants an entirely branchless relationship with their money.",
      d: "Splitting accounts by purpose is neither required nor automatically better — it's a tradeoff between organization and complexity."
    },
    recoveryPath:
      "Switching banks later is always possible — closing an account, or maintaining a bank switch checklist to move recurring deposits and payments, resolves most early mismatches.",
    conceptExplanation: {
      what: "Banks and credit unions both hold deposits and offer accounts, but banks are for-profit and credit unions are member-owned nonprofits.",
      why: "Both are regulated to protect depositors, but their fee structures, ownership models, and service levels differ meaningfully.",
      how: "FDIC insures deposits at member banks and NCUA insures deposits at member credit unions, both generally up to the same standard coverage limit per depositor, per institution, per ownership category.",
      cost: "Fees, minimum balances, and overdraft charges vary widely and can offset any interest earned if not understood upfront.",
      risks: "Using an unregulated or unverified financial app can mean deposits are not insured at all.",
      whoMayBenefit: "People who compare total cost and services, not just brand recognition, tend to find the better fit for their situation.",
      whoMayNotBenefit: "Someone needing frequent in-person help may find a branchless digital bank frustrating regardless of its fees.",
      misunderstandingRisk: "Assuming any app that holds money is automatically FDIC- or NCUA-insured can lead to real losses if it isn't.",
      verifyNote: "Insurance limits and rules can change — always verify current coverage details directly with FDIC or NCUA."
    },
    realWorldExample:
      "Priya, a fictional biology major, used FDIC BankFind to confirm her chosen digital bank's deposits were held at an FDIC-insured partner bank before moving her financial aid refund there. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is the best way to confirm a bank or credit union is insured?",
        type: "multiple_choice",
        options: [
          "Assume any bank with a mobile app is insured",
          "Check the institution directly through FDIC BankFind or NCUA's tools",
          "Ask a friend who banks there",
          "Insurance status doesn't matter for everyday accounts"
        ],
        correctAnswer: "Check the institution directly through FDIC BankFind or NCUA's tools",
        explanation: "FDIC and NCUA provide direct, authoritative lookup tools rather than relying on assumptions or hearsay."
      }
    ],
    sourceIds: ["cfpb-bank-accounts", "fdic-deposit-insurance", "ncua-share-insurance", "fdic-bankfind"],
    achievementId: "bank-account-navigator",
    unlocks: "ep03",
    accessibilitySummary:
      "This episode compares a national bank, a credit union, and a digital bank, and teaches how to verify deposit insurance.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep03",
    act: 1,
    title: "Your First Paycheck",
    subtitle: "Reading gross pay, net pay, and where the difference goes",
    estimatedMinutes: 12,
    learningObjectives: [
      "Distinguish gross pay from net pay",
      "Identify common paycheck deductions including federal withholding, Social Security, and Medicare",
      "Explain the purpose of Form W-4",
      "Explain why a tax refund is not 'free money'",
      "Distinguish W-2 employment from independent contracting"
    ],
    openingNarrative:
      "{{name}}'s first pay stub from the campus job finally arrives, and the number at the bottom doesn't match the hourly rate times hours worked.",
    personalizationSlots: ["ep03.paycheck_context"],
    approvedStoryFragments: ["ep03.paycheck_context"],
    payStubExample: {
      label: "Illustrative fictional pay stub — not a real employer",
      payPeriod: "Biweekly",
      hoursWorked: 40,
      hourlyRate: 12.5,
      grossPay: 500.0,
      federalWithholding: 38.0,
      socialSecurity: 31.0,
      medicare: 7.25,
      stateWithholding: 0.0,
      benefitsDeduction: 0.0,
      netPay: 423.75,
      note: "Actual withholding depends on current IRS tables, Form W-4 elections, and state law — verify with irs.gov."
    },
    scenario: {
      prompt:
        "{{name}} sees gross pay of $500 and net pay of $423.75 on the first pay stub, and has to decide how to fill out Form W-4 for the next pay period.",
      type: "read_pay_stub"
    },
    choices: [
      {
        id: "a",
        text: "Fill out Form W-4 claiming the simplest default settings without reading the instructions",
        whyChosen: "Some learners want to get paperwork done quickly.",
        possibleBenefit: "Fast, low-friction onboarding.",
        possibleCost: "Withholding may not match {{possessive}} actual tax situation, especially with a second job or other income.",
        possibleRisk: "Under-withholding can create a tax bill at filing time; over-withholding means giving the government an interest-free loan.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 1 },
        futureEffect: "At tax time, {{name}} may owe more or get a larger refund than expected, depending on how withholding lined up with actual tax liability.",
        whatCouldChangeThisOutcome: "Using the IRS Tax Withholding Estimator later can catch a mismatch before it becomes a surprise.",
        sourceIds: ["irs-form-w4", "irs-filing"]
      },
      {
        id: "b",
        text: "Take time to read the W-4 instructions and estimate the right withholding",
        whyChosen: "Some learners prefer more accuracy upfront even if it takes more time.",
        possibleBenefit: "Withholding more closely matches actual tax owed, reducing surprises later.",
        possibleCost: "Takes more time and may require estimating income across multiple jobs.",
        possibleRisk: "Estimates can still be off if income or circumstances change during the year.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 3 },
        futureEffect: "More accurate withholding generally means a smaller refund or balance due at filing time — neither is inherently better.",
        whatCouldChangeThisOutcome: "A new job, raise, or side income during the year would call for revisiting the W-4.",
        sourceIds: ["irs-form-w4", "irs-filing"]
      },
      {
        id: "c",
        text: "Ask a parent or advisor to just fill it out without understanding it",
        whyChosen: "Some learners feel overwhelmed by tax paperwork and want help.",
        possibleBenefit: "Reduces immediate stress and paperwork time.",
        possibleCost: "{{name}} doesn't build the skill of reading and understanding {{possessive}} own paycheck.",
        possibleRisk: "If the helper's assumptions don't match {{possessive}} situation, withholding could be inaccurate without {{name}} knowing why.",
        immediateEffect: { cashOnHand: 0, financialKnowledge: 0, wellbeing: 1 },
        futureEffect: "This can work fine short-term, but understanding the form becomes more important as {{possessive}} income and life get more complex.",
        whatCouldChangeThisOutcome: "Revisiting the form together, with explanation this time, closes the knowledge gap without redoing the outcome.",
        sourceIds: ["irs-form-w4"]
      }
    ],
    immediateConsequences: {
      a: "{{name}}'s next paycheck arrives on the same default schedule, with no immediate visible change.",
      b: "{{name}} spends about twenty extra minutes on paperwork but leaves with a clearer withholding estimate.",
      c: "{{name}}'s form is submitted quickly, but {{subject}} can't fully explain the choices on it."
    },
    oneYearConsequences: {
      a: "At tax time, {{name}} discovers a refund or balance that's larger than expected either way.",
      b: "At tax time, {{name}}'s refund or balance due is small and roughly expected.",
      c: "At tax time, {{name}} has to ask for help again to understand the result."
    },
    longTermConsequences: {
      a: "Default settings can work fine for simple situations but become less reliable with multiple jobs or income sources.",
      b: "Understanding withholding is a skill that carries forward through every job change, raise, and side income for the rest of a working life.",
      c: "Relying entirely on someone else is a reasonable short-term choice, but building independent understanding pays off as financial life gets more complex."
    },
    recoveryPath:
      "A W-4 can be updated at any time during the year — {{name}} isn't locked into a single choice made in week one.",
    conceptExplanation: {
      what: "Gross pay is total earnings before deductions; net pay (take-home pay) is what's left after taxes and other withholdings.",
      why: "Employers withhold federal income tax, Social Security, and Medicare because the law requires it, and because it spreads tax payments across the year instead of one lump sum.",
      how: "Form W-4 tells an employer how much federal income tax to withhold based on filing status, other income, and credits.",
      cost: "Over-withholding ties up money all year that could otherwise be saved or used; under-withholding can mean owing money, and possibly a penalty, at filing time.",
      risks: "Treating a refund as a bonus rather than returned overpayment can lead to overspending money that was already the learner's.",
      whoMayBenefit: "Anyone with a single steady job often finds W-4 defaults reasonably close to accurate.",
      whoMayNotBenefit: "Someone with multiple jobs, freelance income, or a spouse who also works may need to adjust withholding more carefully.",
      misunderstandingRisk: "A large tax refund is not 'free money' — it is the learner's own money that was withheld and then returned without interest.",
      verifyNote: "Withholding tables, tax brackets, and Form W-4 details change; always check current guidance at irs.gov before filing."
    },
    realWorldExample:
      "Marcus, a fictional exercise science major, worked two part-time jobs and used the IRS Tax Withholding Estimator after his first year to fix under-withholding that had caused an unexpected balance due. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "A large tax refund generally means:",
        type: "multiple_choice",
        options: [
          "The government gave you a bonus",
          "You had more tax withheld from your paychecks than you owed, and it's being returned",
          "You did something wrong on your W-4",
          "You will always get the same refund next year"
        ],
        correctAnswer: "You had more tax withheld from your paychecks than you owed, and it's being returned",
        explanation: "A refund reflects overpayment through withholding during the year — it is the taxpayer's own money returned, not a gift or bonus."
      }
    ],
    sourceIds: ["irs-form-w2", "irs-form-w4", "irs-filing"],
    achievementId: "paycheck-decoder",
    unlocks: "ep04",
    accessibilitySummary:
      "This episode reads a fictional pay stub and explains gross pay, net pay, Form W-4, and why a refund is returned overpayment, not free money.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep04",
    act: 1,
    title: "Give Every Dollar a Job—Without Making One Budget Sacred",
    subtitle: "Comparing budgeting systems that fit different lives",
    estimatedMinutes: 14,
    learningObjectives: [
      "Define cash flow and categorize fixed, variable, periodic, and unexpected expenses",
      "Compare zero-based budgeting, percentage-based planning, and pay-yourself-first systems",
      "Evaluate digital versus paper tracking methods",
      "Explain why different budgeting methods work for different people"
    ],
    openingNarrative:
      "{{name}} has one semester of pay stubs now and wants a plan instead of guessing where the money goes each month.",
    personalizationSlots: ["ep04.budget_context"],
    approvedStoryFragments: ["ep04.budget_context"],
    scenario: {
      prompt:
        "{{name}} must build a plan covering housing, food, transportation, social activities, and savings from a limited monthly income, choosing a budgeting method to organize it.",
      type: "adjust_simulator"
    },
    choices: [
      {
        id: "a",
        text: "Use zero-based budgeting, assigning every dollar a category",
        whyChosen: "Some learners like knowing exactly where every dollar is planned to go.",
        possibleBenefit: "High visibility into spending and strong control over discretionary categories.",
        possibleCost: "Takes more time to set up and maintain each month.",
        possibleRisk: "Can feel restrictive and may be abandoned if it feels like too much overhead.",
        immediateEffect: { financialKnowledge: 3, monthlyCashFlow: 0 },
        futureEffect: "Detailed tracking often surfaces small leaks in spending that add up significantly over a year.",
        whatCouldChangeThisOutcome: "Simplifying categories over time can keep the method sustainable long-term.",
        sourceIds: ["cfpb-your-money-your-goals", "fdic-money-smart"]
      },
      {
        id: "b",
        text: "Use percentage-based planning (e.g., broad splits across needs, wants, and savings)",
        whyChosen: "Some learners prefer simpler, broader categories over detailed line items.",
        possibleBenefit: "Easier to maintain with less time investment.",
        possibleCost: "Less precision on where exactly money is going within a category.",
        possibleRisk: "Broad categories can mask a specific problem area, like rising food delivery spending.",
        immediateEffect: { financialKnowledge: 2, monthlyCashFlow: 0 },
        futureEffect: "This approach tends to be sustainable long-term because it takes less ongoing effort.",
        whatCouldChangeThisOutcome: "Adding more detail to just one category, if needed, keeps the system flexible.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Use pay-yourself-first (savings set aside automatically before spending)",
        whyChosen: "Some learners prioritize protecting savings above tracking every category.",
        possibleBenefit: "Savings goal is met automatically regardless of spending behavior elsewhere.",
        possibleCost: "Less visibility into whether spending in other categories is sustainable.",
        possibleRisk: "If income drops unexpectedly, the automatic transfer could strain other bills if not adjusted.",
        immediateEffect: { financialKnowledge: 2, monthlyCashFlow: 0, cashOnHand: -50 },
        futureEffect: "Consistent automatic saving tends to build an emergency fund and other goals faster than saving 'whatever is left.'",
        whatCouldChangeThisOutcome: "Adjusting the automatic amount when income changes keeps this sustainable.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "d",
        text: "Track everything on paper instead of an app",
        whyChosen: "Some learners retain information better by writing it out, or prefer not to link accounts to an app.",
        possibleBenefit: "No data-sharing with a third-party app and a tactile habit some people stick with better.",
        possibleCost: "More manual effort and no automatic categorization or alerts.",
        possibleRisk: "Easier to fall behind on entries during a busy week.",
        immediateEffect: { financialKnowledge: 2, monthlyCashFlow: 0 },
        futureEffect: "Paper tracking can work as well as any app if the habit sticks, though it takes more discipline to maintain.",
        whatCouldChangeThisOutcome: "Pairing a simple paper method with a monthly digital check-in can combine the benefits of both.",
        sourceIds: ["fdic-money-smart"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} spends an evening setting up categories and feels clearer about the month ahead.",
      b: "{{name}} sets three broad buckets in about ten minutes.",
      c: "{{name}} sets up an automatic transfer the day pay arrives.",
      d: "{{name}} starts a small notebook and commits to updating it daily."
    },
    oneYearConsequences: {
      a: "{{name}} has detailed data on spending habits and has cut a few unnecessary subscriptions as a result.",
      b: "{{name}} has kept up the habit consistently because it took so little time each month.",
      c: "{{name}} has built a small emergency cushion without having to think about it actively.",
      d: "{{name}} has some gaps in the paper log from busy weeks but generally has a good sense of spending patterns."
    },
    longTermConsequences: {
      a: "Detailed budgeting methods reward people who enjoy tracking detail, but can be abandoned if they become a chore.",
      b: "Simpler methods are more likely to be sustained over years, even if they offer less granular insight.",
      c: "Automating savings tends to outperform manual saving because it removes the need for willpower each month.",
      d: "Paper-based tracking remains a legitimate method; the right system is whichever one a person actually keeps using."
    },
    recoveryPath:
      "Any budgeting method can be swapped for another at any time — falling behind on one system for a few weeks doesn't erase the value of starting again.",
    conceptExplanation: {
      what: "A budget is a plan for cash flow: matching expected income against fixed, variable, periodic, and unexpected expenses.",
      why: "Without a plan, spending tends to expand to fill available cash, leaving little for irregular or future expenses.",
      how: "Zero-based budgeting assigns every dollar a job; percentage-based planning uses broad category splits; pay-yourself-first automates savings before spending decisions happen.",
      cost: "More detailed systems take more time; simpler systems trade some visibility for sustainability.",
      risks: "Any system can fail if it's abandoned — the 'best' budget is the one that gets used consistently.",
      whoMayBenefit: "People with irregular expenses often benefit from more detailed tracking, at least at first.",
      whoMayNotBenefit: "People with very simple, stable finances may find detailed tracking to be more effort than it's worth.",
      misunderstandingRisk: "Believing there is one 'correct' budgeting method can cause people to abandon money management entirely when their first attempt doesn't fit.",
      verifyNote: "This overview compares general budgeting frameworks, not personalized financial planning."
    },
    realWorldExample:
      "Aisha, a fictional accounting major, tried a detailed app-based system, found it exhausting within a month, and switched to a simple three-category percentage split that she has maintained for two years. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is the main idea behind comparing several budgeting methods in this episode?",
        type: "multiple_choice",
        options: [
          "Zero-based budgeting is the only method that works",
          "Different budgeting methods fit different people, and the best one is whichever gets used consistently",
          "Paper tracking is outdated and should be avoided",
          "A budget only matters if income is very high"
        ],
        correctAnswer: "Different budgeting methods fit different people, and the best one is whichever gets used consistently",
        explanation: "The episode explicitly avoids declaring one method universally superior, focusing instead on fit and sustainability."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals", "fdic-money-smart"],
    achievementId: "cash-flow-builder",
    unlocks: "ep05",
    accessibilitySummary:
      "This episode compares zero-based budgeting, percentage-based planning, pay-yourself-first, and paper tracking as different valid systems.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep05",
    act: 1,
    title: "Credit Is a Contract, Not Free Money",
    subtitle: "Reading the real cost of borrowing",
    estimatedMinutes: 15,
    calculatorType: "debtAvalancheSnowball",
    learningObjectives: [
      "Explain what a credit report and credit score generally represent",
      "Define APR, minimum payments, and utilization",
      "Compare secured versus unsecured, and installment versus revolving debt",
      "Describe consequences of missed payments and basics of fraud protection"
    ],
    openingNarrative:
      "{{name}} gets a credit card offer in the mail with a promotional rate, and has to decide whether and how to use it.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    payoffComparisonExample: {
      label: "Illustrative example: $2,000 balance at 22% APR — not a real account",
      scenarios: [
        { name: "Minimum payments only (~2% of balance)", monthsToPayoff: 139, totalInterestPaid: 2540 },
        { name: "Fixed $100 per month", monthsToPayoff: 25, totalInterestPaid: 480 },
        { name: "Fixed $200 per month", monthsToPayoff: 11, totalInterestPaid: 195 }
      ],
      note: "Figures are simplified illustrative estimates. Actual terms, fees, and rates vary by issuer and change over time — verify with your card agreement."
    },
    scenario: {
      prompt:
        "{{name}} is deciding how to use a new credit card: as an emergency-only tool, for planned purchases paid in full monthly, for a large purchase paid off slowly, or to decline the offer entirely.",
      type: "compare_total_cost"
    },
    choices: [
      {
        id: "a",
        text: "Use the card only for emergencies and pay any balance in full",
        whyChosen: "Some learners want the safety net of credit without ongoing balances.",
        possibleBenefit: "Builds payment history over time with minimal interest cost.",
        possibleCost: "Requires discipline to distinguish a true emergency from a want.",
        possibleRisk: "An emergency could still be larger than what can be paid off quickly.",
        immediateEffect: { creditHealth: 1, debtBalance: 0 },
        futureEffect: "Consistent on-time, low-utilization use tends to support a stronger credit history over time.",
        whatCouldChangeThisOutcome: "A true emergency exceeding available cash would require a repayment plan and possibly other resources.",
        sourceIds: ["cfpb-credit-reports-scores"]
      },
      {
        id: "b",
        text: "Use the card for planned purchases and pay the statement balance in full every month",
        whyChosen: "Some learners want to build credit history while treating the card like a debit card.",
        possibleBenefit: "Builds payment history and utilization record with no interest cost if paid in full.",
        possibleCost: "Requires monthly discipline to avoid carrying a balance.",
        possibleRisk: "A missed due date, even once, can trigger interest charges and a late-payment mark.",
        immediateEffect: { creditHealth: 2, debtBalance: 0 },
        futureEffect: "This pattern, sustained over years, is one of the more reliable ways to build a strong credit history.",
        whatCouldChangeThisOutcome: "Setting up autopay for at least the full statement balance reduces the risk of a missed payment.",
        sourceIds: ["cfpb-credit-reports-scores"]
      },
      {
        id: "c",
        text: "Make a large purchase now and pay it off slowly over time",
        whyChosen: "Some learners need to make a purchase before saving the full amount.",
        possibleBenefit: "Access to something needed now rather than waiting to save the full amount.",
        possibleCost: "Interest accrues on any balance carried past the due date, increasing the total cost of the purchase.",
        possibleRisk: "As the payoff comparison shows, minimum payments alone can take over a decade and multiply the total cost.",
        immediateEffect: { debtBalance: 2000, debtCost: 2, creditHealth: -1 },
        futureEffect: "Under the illustrative example, minimum payments alone would take over 11 years and roughly double the item's cost in interest.",
        whatCouldChangeThisOutcome: "Paying more than the minimum each month, as shown in the comparison, dramatically shortens payoff time and total cost.",
        sourceIds: ["cfpb-credit-reports-scores", "cfpb-debt-collection"]
      },
      {
        id: "d",
        text: "Decline the credit card offer entirely for now",
        whyChosen: "Some learners prefer to avoid credit products until they feel ready.",
        possibleBenefit: "No risk of carrying a balance or missing a payment on this account.",
        possibleCost: "Delays building a credit history through this potential tool.",
        possibleRisk: "A thin or nonexistent credit history can make some future applications (like renting an apartment) more difficult.",
        immediateEffect: { creditHealth: 0, debtBalance: 0 },
        futureEffect: "Credit history can be built later through other means, such as a secured card or becoming an authorized user.",
        whatCouldChangeThisOutcome: "{{name}} can revisit this decision anytime a specific need or better-understood offer comes along.",
        sourceIds: ["cfpb-credit-reports-scores"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} keeps the card unused in a drawer, mentally reserved for real emergencies.",
      b: "{{name}} starts using the card for groceries and gas, paying it off every statement cycle.",
      c: "{{name}} makes the purchase and sees a new monthly minimum payment appear.",
      d: "{{name}} shreds the offer and moves on with no new account."
    },
    oneYearConsequences: {
      a: "{{name}} has a card with a short but clean payment history and no interest paid.",
      b: "{{name}} has a year of on-time payments and a credit score that reflects that consistency.",
      c: "{{name}} is still carrying a portion of the original balance and has paid a meaningful amount in interest.",
      d: "{{name}} has no new credit history yet but also no new financial risk from this decision."
    },
    longTermConsequences: {
      a: "This cautious pattern can support decent credit health but may build history more slowly than active, paid-in-full use.",
      b: "Sustained on-time, paid-in-full use is one of the more effective ways to build strong credit over years.",
      c: "Carrying revolving balances long-term, as the amortization comparison shows, can multiply the true cost of a purchase far beyond its sticker price.",
      d: "Avoiding credit avoids interest risk but may need to be revisited eventually, since credit history affects more than just borrowing money."
    },
    recoveryPath:
      "A balance being paid down slowly can be accelerated at any point by increasing monthly payments, and a missed payment's impact fades over time with a return to on-time payments.",
    conceptExplanation: {
      what: "Credit is a contract to borrow money now and repay it later, generally with interest, under terms set by the lender.",
      why: "Lenders charge interest (expressed as APR) to compensate for the risk and time value of lending money.",
      how: "A credit report tracks borrowing history; a credit score summarizes that history into a number lenders use to assess risk.",
      cost: "The true cost of carrying a balance can far exceed the sticker price of a purchase, as shown in the payoff comparison above.",
      risks: "Missed payments can trigger late fees, a higher penalty APR, and negative marks on a credit report that can last years.",
      whoMayBenefit: "People who pay balances in full and on time can build credit history at very low cost.",
      whoMayNotBenefit: "People carrying high-interest balances long-term pay significantly more than the original amount borrowed.",
      misunderstandingRisk: "Treating a credit limit as available spending money, rather than borrowed money that must be repaid with interest, is a common and costly mistake.",
      verifyNote: "Interest rates, fees, and credit reporting practices vary by issuer and change over time — always review your actual card agreement."
    },
    realWorldExample:
      "Devon, a fictional computer science major, used a card only for gas and paid it off every month; two years later, that history helped Devon qualify for a lower-rate auto loan. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Based on the payoff comparison, what is the main advantage of paying more than the minimum payment?",
        type: "multiple_choice",
        options: [
          "It has no real effect on total cost",
          "It significantly reduces both payoff time and total interest paid",
          "It automatically improves your credit limit",
          "It removes the need to make future payments"
        ],
        correctAnswer: "It significantly reduces both payoff time and total interest paid",
        explanation: "The illustrative example shows minimum payments taking over 11 years and costing far more in interest than fixed higher payments."
      },
      {
        id: "kc2",
        question: "What does APR represent?",
        type: "multiple_choice",
        options: [
          "A one-time fee charged only at account opening",
          "The annual cost of borrowing, expressed as a percentage",
          "The maximum amount that can be borrowed",
          "A government-set savings rate"
        ],
        correctAnswer: "The annual cost of borrowing, expressed as a percentage",
        explanation: "APR (Annual Percentage Rate) expresses the yearly cost of borrowing, including interest and some fees, as a percentage."
      }
    ],
    sourceIds: ["cfpb-credit-reports-scores", "cfpb-debt-collection"],
    achievementId: "credit-contract-reader",
    unlocks: "ep06",
    accessibilitySummary:
      "This episode compares four ways of using a new credit card and includes a payoff-time and interest comparison table.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep06",
    act: 2,
    title: "When Life Interrupts the Plan",
    subtitle: "Emergency funds, insurance, and support systems",
    estimatedMinutes: 13,
    learningObjectives: [
      "Explain the role of an emergency fund and liquidity in financial planning",
      "Compare insurance, family support, community resources, and borrowing as responses to a disruption",
      "Describe why some people cannot immediately save three to six months of expenses, without judgment"
    ],
    openingNarrative:
      "Partway through the semester, something goes wrong for {{name}} that no budget category was built for.",
    personalizationSlots: ["ep06.emergency_context"],
    approvedStoryFragments: ["ep06.emergency_context"],
    scenario: {
      prompt:
        "{{name}} faces an unexpected $600 expense with $150 in savings, and must choose how to cover the gap.",
      type: "rank_tradeoffs"
    },
    choices: [
      {
        id: "a",
        text: "Use the small emergency savings and cover the rest with a payment plan from the provider",
        whyChosen: "Some learners prefer using savings first and negotiating the remainder directly.",
        possibleBenefit: "Avoids high-interest borrowing for the portion covered by a payment plan.",
        possibleCost: "Emergency savings are depleted and need rebuilding.",
        possibleRisk: "Missing a payment plan installment could still lead to collections.",
        immediateEffect: { cashOnHand: -150, emergencyFundMonths: -1, debtBalance: 450 },
        futureEffect: "Rebuilding the emergency fund becomes the next priority, which may take a few months.",
        whatCouldChangeThisOutcome: "Some providers offer reduced-cost or hardship plans if asked directly.",
        sourceIds: ["cfpb-your-money-your-goals", "cfpb-debt-collection"]
      },
      {
        id: "b",
        text: "Ask family for help covering part of the cost",
        whyChosen: "Some learners have family who are willing and able to help.",
        possibleBenefit: "May avoid debt or high fees entirely if family can help.",
        possibleCost: "Can create relational dynamics or a sense of obligation.",
        possibleRisk: "Not everyone has family with the capacity to help, which is a real and common constraint.",
        immediateEffect: { cashOnHand: -150, emergencyFundMonths: 0, debtBalance: 0, wellbeing: 1 },
        futureEffect: "Family support can be a real financial resource, though it isn't available to everyone and comes with its own complexity.",
        whatCouldChangeThisOutcome: "A clear conversation about whether the help is a gift or a loan avoids confusion later.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Look for community or campus emergency assistance resources",
        whyChosen: "Some learners are unaware such resources exist and benefit from checking.",
        possibleBenefit: "Many campuses and communities have small emergency grant or assistance funds.",
        possibleCost: "Application processes can take time, which may not fit an urgent need.",
        possibleRisk: "Not all needs qualify, and funds are often limited.",
        immediateEffect: { cashOnHand: -150, wellbeing: 1 },
        futureEffect: "Knowing these resources exist can help in future emergencies too, not just this one.",
        whatCouldChangeThisOutcome: "Campus financial aid or student affairs offices often know about these resources even when they aren't widely advertised.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "d",
        text: "Put the remaining balance on a credit card",
        whyChosen: "Some learners have no other immediate option available.",
        possibleBenefit: "Immediate access to funds without needing approval from anyone else.",
        possibleCost: "Interest accrues on any balance not paid off quickly.",
        possibleRisk: "This can start a cycle of carrying balances if not paid down deliberately afterward.",
        immediateEffect: { cashOnHand: -150, debtBalance: 450, debtCost: 1 },
        futureEffect: "The true cost depends entirely on how quickly the balance is paid down.",
        whatCouldChangeThisOutcome: "Reviewing the amortization comparison from Episode 5 can help {{name}} plan a faster payoff.",
        sourceIds: ["cfpb-credit-reports-scores"]
      }
    ],
    immediateConsequences: {
      a: "{{name}}'s savings hit zero, but a manageable payment plan covers the rest without interest.",
      b: "{{name}}'s family sends what they can, and the two agree it's a gift, not a loan.",
      c: "{{name}} submits an application to a campus emergency fund and waits to hear back.",
      d: "{{name}}'s card balance jumps by $450 overnight."
    },
    oneYearConsequences: {
      a: "{{name}} has rebuilt a small emergency cushion after a few careful months.",
      b: "{{name}}'s relationship with family is unaffected, and the emergency fund stays intact.",
      c: "{{name}} received partial assistance and covered the rest slowly, avoiding new debt.",
      d: "{{name}} has paid off the balance but also paid meaningful interest along the way."
    },
    longTermConsequences: {
      a: "Payment plans can be a reasonable middle path when savings alone aren't enough.",
      b: "Family support, when available, can meaningfully reduce financial stress — but its absence for other students isn't a personal failing.",
      c: "Community resources exist precisely for moments like this, though access and awareness vary by campus and region.",
      d: "Credit can bridge a true emergency, but the interest cost rewards paying it down as quickly as possible afterward."
    },
    recoveryPath:
      "None of these paths is a permanent setback — emergency funds can be rebuilt, payment plans completed, and even credit card balances paid down with a focused plan.",
    conceptExplanation: {
      what: "An emergency fund is money set aside specifically for unplanned expenses, kept liquid (easy to access) rather than invested.",
      why: "Life disruptions — medical, transportation, housing, family — are common and often unpredictable in timing and size.",
      how: "Many educators suggest building toward three to six months of essential expenses over time, but starting with any amount, even $100, provides real protection.",
      cost: "Money held in a liquid emergency fund generally earns less than money invested for the long term — that's the tradeoff for having it available immediately.",
      risks: "No cushion at all can force a person into higher-cost borrowing during a crisis.",
      whoMayBenefit: "Anyone with irregular expenses or income benefits from having even a small liquid cushion.",
      whoMayNotBenefit: "Someone with very stable income, strong family backup, and low fixed costs may need a smaller cushion than someone without those supports.",
      misunderstandingRisk: "Assuming everyone can quickly save three to six months of expenses ignores real differences in income, family wealth, health, and circumstance.",
      verifyNote: "This is general guidance, not a personalized assessment of how much any individual should save."
    },
    realWorldExample:
      "Elena, a fictional social work major, had no emergency savings when her phone broke and she needed it for work scheduling; a campus emergency fund covered half the replacement cost while she paid the rest over two paychecks. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why does this episode avoid saying everyone should have three to six months of expenses saved immediately?",
        type: "multiple_choice",
        options: [
          "Because emergency funds aren't actually useful",
          "Because income, family support, health, and circumstances vary, and building savings takes time",
          "Because three to six months is always too much",
          "Because insurance always replaces the need for savings"
        ],
        correctAnswer: "Because income, family support, health, and circumstances vary, and building savings takes time",
        explanation: "The episode is explicit that not everyone can save this amount immediately, and that this isn't a personal failing."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals", "cfpb-debt-collection", "cfpb-credit-reports-scores"],
    achievementId: "emergency-route-planner",
    unlocks: "ep07",
    accessibilitySummary:
      "This episode presents an unexpected $600 expense and compares payment plans, family help, community resources, and credit as responses.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep07",
    act: 2,
    title: "The Real Cost of Getting Around",
    subtitle: "Total ownership cost versus sticker price",
    estimatedMinutes: 13,
    calculatorType: "transportation",
    learningObjectives: [
      "Distinguish purchase price from total cost of ownership",
      "Identify components of vehicle cost: interest, insurance, repairs, fuel, registration, depreciation",
      "Compare public transit, ride services, used and new purchase, leasing, and living without a car"
    ],
    openingNarrative:
      "{{name}} needs a reliable way to get to classes, work, and everywhere else, and has to weigh several very different options.",
    personalizationSlots: ["ep07.transportation_context"],
    approvedStoryFragments: ["ep07.transportation_context"],
    scenario: {
      prompt:
        "{{name}} compares buying a used car with a loan, leasing a new car, relying on public transit and occasional ride-share, and going without a vehicle by living close to campus.",
      type: "compare_total_cost"
    },
    choices: [
      {
        id: "a",
        text: "Buy a used car with an auto loan",
        whyChosen: "Some learners need reliable, flexible transportation not tied to a schedule or route.",
        possibleBenefit: "Ownership and flexibility, generally with lower payments than a new car.",
        possibleCost: "Loan interest, insurance, registration, fuel, and unpredictable repair costs on an older vehicle.",
        possibleRisk: "An older vehicle can have a major repair at an inconvenient time.",
        immediateEffect: { debtBalance: 6000, monthlyCashFlow: -220, totalAssets: 7000 },
        futureEffect: "The vehicle depreciates over time, but paying off the loan builds owned equity in it.",
        whatCouldChangeThisOutcome: "A pre-purchase mechanic inspection can reduce (not eliminate) the risk of a major early repair.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "b",
        text: "Lease a new car",
        whyChosen: "Some learners prefer predictable payments and a newer vehicle under warranty.",
        possibleBenefit: "Lower repair risk and predictable monthly costs during the lease term.",
        possibleCost: "Ongoing payments build no ownership equity, and mileage limits can trigger extra fees.",
        possibleRisk: "Ending a lease early or exceeding mileage limits can be costly.",
        immediateEffect: { monthlyCashFlow: -280, totalAssets: 0 },
        futureEffect: "At lease-end, {{name}} has no vehicle equity and must decide to lease again, buy, or choose another option.",
        whatCouldChangeThisOutcome: "Understanding mileage limits before signing avoids the most common lease surprise cost.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "c",
        text: "Rely on public transit and occasional ride-share",
        whyChosen: "Some learners live somewhere with viable transit and want to avoid vehicle costs entirely.",
        possibleBenefit: "No loan, insurance, fuel, or repair costs — generally the lowest-cost option where available.",
        possibleCost: "Less flexibility and schedule dependency on transit routes and times.",
        possibleRisk: "This option isn't viable everywhere, particularly in rural areas.",
        immediateEffect: { monthlyCashFlow: -60, totalAssets: 0 },
        futureEffect: "Savings from avoiding car ownership can be redirected toward other goals.",
        whatCouldChangeThisOutcome: "A later job or living situation outside transit range would require revisiting this choice.",
        sourceIds: ["cfpb-your-money-your-goals"]
      },
      {
        id: "d",
        text: "Live without a car by choosing housing within walking distance",
        whyChosen: "Some learners prioritize eliminating transportation cost over housing flexibility.",
        possibleBenefit: "Eliminates most transportation costs entirely.",
        possibleCost: "Fewer housing options, potentially at a premium for the convenient location.",
        possibleRisk: "Off-campus jobs, family visits, or errands outside walking distance become harder.",
        immediateEffect: { monthlyCashFlow: -30, totalAssets: 0 },
        futureEffect: "This works well while housing stays walkable, but may need revisiting after graduation.",
        whatCouldChangeThisOutcome: "A change in job location or housing availability would reopen this decision.",
        sourceIds: ["cfpb-your-money-your-goals"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} drives off with a car and a new monthly loan payment.",
      b: "{{name}} signs a multi-year lease with a mileage cap.",
      c: "{{name}} buys a transit pass and budgets occasional ride-share trips.",
      d: "{{name}} chooses a slightly pricier apartment within walking distance of everything important."
    },
    oneYearConsequences: {
      a: "{{name}} has paid down some loan principal but also covered one unexpected repair.",
      b: "{{name}} is near the mileage limit and has to decide whether to pay overage fees.",
      c: "{{name}} has spent far less overall but occasionally had to plan trips around transit schedules.",
      d: "{{name}} has saved significantly on transportation but paid a bit more in rent."
    },
    longTermConsequences: {
      a: "Owning a vehicle, even with loan interest, can build long-term equity once paid off — unlike leasing.",
      b: "Leasing avoids major repair risk but never builds ownership equity, an ongoing cost with no eventual payoff.",
      c: "Relying on transit and ride-share can be the lowest total-cost option where infrastructure supports it, but isn't available everywhere.",
      d: "Choosing walkable housing can eliminate transportation cost, but ties long-term flexibility to housing location."
    },
    recoveryPath:
      "Any of these choices can be revisited later as circumstances, location, and finances change — there's no permanent lock-in.",
    conceptExplanation: {
      what: "Total cost of ownership includes the purchase price plus financing interest, insurance, fuel, maintenance, repairs, registration, and depreciation.",
      why: "A vehicle's sticker price often understates its true multi-year cost significantly.",
      how: "Comparing total cost across options (own, lease, transit, no vehicle) reveals tradeoffs sticker price alone hides.",
      cost: "Vehicle costs are among the largest recurring expenses in many household budgets.",
      risks: "Under-budgeting for insurance, repairs, or depreciation is a common way transportation costs cause financial strain.",
      whoMayBenefit: "People in transit-accessible areas may benefit most from skipping vehicle ownership costs entirely.",
      whoMayNotBenefit: "People in rural or transit-poor areas often have no realistic alternative to vehicle ownership.",
      misunderstandingRisk: "Comparing only monthly payments, without insurance, fuel, and repairs, understates the real cost difference between options.",
      verifyNote: "Actual costs vary significantly by location, vehicle, insurance history, and lender terms."
    },
    realWorldExample:
      "Sam, a fictional civil engineering major, initially planned to buy a car but ran the total-cost numbers and realized a transit pass plus occasional ride-shares cost roughly a third as much for his specific commute. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why can comparing only monthly payments between a car loan and a lease be misleading?",
        type: "multiple_choice",
        options: [
          "Monthly payments are the only cost that matters",
          "It ignores other costs like insurance, fuel, repairs, and whether ownership equity is being built",
          "Leases never have any additional costs",
          "Loans are always cheaper than leases in every case"
        ],
        correctAnswer: "It ignores other costs like insurance, fuel, repairs, and whether ownership equity is being built",
        explanation: "Total cost of ownership requires looking beyond the payment itself to insurance, fuel, repairs, and equity outcomes."
      }
    ],
    sourceIds: ["cfpb-your-money-your-goals"],
    achievementId: "cost-of-getting-around",
    unlocks: "ep08",
    accessibilitySummary:
      "This episode compares total transportation cost across buying used, leasing new, transit and ride-share, and living car-free.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep08",
    act: 2,
    title: "Education, Career, and Return on Investment",
    subtitle: "Weighing cost, earnings ranges, and uncertainty",
    estimatedMinutes: 14,
    learningObjectives: [
      "Compare tuition, scholarships, grants, and student loans as funding sources",
      "Explain the general relationship between credentials and career earnings ranges",
      "Describe why labor market and earnings data reflect ranges and uncertainty, not guarantees"
    ],
    openingNarrative:
      "{{name}} is choosing a major and weighing how the cost of different paths compares to what {{subject}} might earn afterward.",
    personalizationSlots: ["ep08.career_context"],
    approvedStoryFragments: ["ep08.career_context"],
    scenario: {
      prompt:
        "{{name}} compares a four-year degree path with loans, a shorter credential or apprenticeship path, and an unpaid but resume-building opportunity, using BLS earnings ranges as general reference points rather than guarantees.",
      type: "select_evidence"
    },
    choices: [
      {
        id: "a",
        text: "Pursue the four-year degree, taking out federal student loans to cover the gap",
        whyChosen: "Some learners want a specific credential that requires a four-year path.",
        possibleBenefit: "Access to careers that require a bachelor's degree as a baseline qualification.",
        possibleCost: "Loan balance accrues and must be repaid, generally starting after graduation.",
        possibleRisk: "Career earnings vary widely by field, location, and economic conditions — a degree does not guarantee a specific salary.",
        immediateEffect: { debtBalance: 20000, financialKnowledge: 2 },
        futureEffect: "Federal loan repayment plans, including income-driven options, can adjust payments based on future earnings.",
        whatCouldChangeThisOutcome: "Checking studentaid.gov repayment estimators before borrowing helps set realistic expectations.",
        sourceIds: ["studentaid-repayment", "bls-ooh"]
      },
      {
        id: "b",
        text: "Pursue a shorter credential or apprenticeship program",
        whyChosen: "Some learners want to enter the workforce sooner with less debt.",
        possibleBenefit: "Lower cost and faster entry into paid work, sometimes with earn-while-you-learn structures.",
        possibleCost: "Some career paths remain closed without a four-year degree.",
        possibleRisk: "Program quality and job placement rates vary significantly between providers.",
        immediateEffect: { debtBalance: 3000, financialKnowledge: 2 },
        futureEffect: "Many skilled trades and technical fields offer solid earnings ranges without requiring a four-year degree, per BLS data.",
        whatCouldChangeThisOutcome: "Researching a specific program's completion and placement rates reduces uncertainty before enrolling.",
        sourceIds: ["bls-ooh"]
      },
      {
        id: "c",
        text: "Take the unpaid resume-building opportunity while working part-time to cover costs",
        whyChosen: "Some learners prioritize a specific credential-adjacent experience over a formal path.",
        possibleBenefit: "Direct experience and connections in a specific field of interest.",
        possibleCost: "No income from the unpaid role itself, and no formal credential gained.",
        possibleRisk: "Without a credential, some employers may still require formal qualifications for hiring.",
        immediateEffect: { debtBalance: 0, financialKnowledge: 1, cashOnHand: -50 },
        futureEffect: "This path can work well in fields where portfolios or direct experience matter more than degrees, but not universally.",
        whatCouldChangeThisOutcome: "Combining this experience with a later credential can strengthen the overall path.",
        sourceIds: ["bls-ooh"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} enrolls full-time and signs federal loan paperwork for the funding gap.",
      b: "{{name}} enrolls in a shorter program with a smaller loan balance.",
      c: "{{name}} starts the unpaid role and picks up part-time paid work on the side."
    },
    oneYearConsequences: {
      a: "{{name}} is a year into the degree with a growing loan balance and developing coursework in the field.",
      b: "{{name}} is close to completing the credential and researching entry-level openings.",
      c: "{{name}} has a portfolio of experience but is still deciding whether a formal credential is needed."
    },
    longTermConsequences: {
      a: "A four-year degree can open doors to specific careers, but its value depends heavily on field, cost, and whether it's completed.",
      b: "Shorter credentials and apprenticeships can offer strong earnings-to-cost ratios in fields where they're recognized qualifications.",
      c: "Experience-based paths can work well in some creative or entrepreneurial fields but may hit ceilings where credentials are formally required."
    },
    recoveryPath:
      "Educational paths aren't mutually exclusive over a lifetime — credentials, degrees, and experience can be added in almost any order as circumstances change.",
    conceptExplanation: {
      what: "Return on investment in education compares the cost of a credential (tuition, fees, foregone income, loans) against likely career outcomes.",
      why: "Educational paths vary enormously in cost and typical earnings outcomes, making blanket claims about 'the best path' unreliable.",
      how: "The Bureau of Labor Statistics Occupational Outlook Handbook provides typical earnings ranges and outlook data by occupation, which can inform (not guarantee) expectations.",
      cost: "Tuition, fees, and foregone income while studying are real costs regardless of the path chosen.",
      risks: "Treating any single figure (like an average salary) as a personal guarantee ignores the wide range of individual outcomes.",
      whoMayBenefit: "People entering fields with well-documented credential requirements benefit from matching the credential to the actual requirement.",
      whoMayNotBenefit: "People in rapidly changing fields may find that specific credential value shifts faster than data can track.",
      misunderstandingRisk: "The claim 'a college degree always pays off' oversimplifies a decision that depends heavily on field, cost, and completion.",
      verifyNote: "BLS data reflects historical ranges and projections, not guarantees for any individual, and updates periodically — check bls.gov/ooh for current figures."
    },
    realWorldExample:
      "Taylor, a fictional psychology major, compared BLS earnings ranges for two fields of interest before choosing a major, while acknowledging the ranges were historical data, not a promise. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why does this episode avoid stating that a college degree always pays off?",
        type: "multiple_choice",
        options: [
          "Because college degrees never have value",
          "Because outcomes vary widely by field, cost, completion, and circumstances",
          "Because only trade credentials have real value",
          "Because BLS data doesn't cover degree-holders"
        ],
        correctAnswer: "Because outcomes vary widely by field, cost, completion, and circumstances",
        explanation: "The episode explicitly avoids blanket claims, since real outcomes depend on many individual factors."
      }
    ],
    sourceIds: ["bls-ooh", "studentaid-repayment"],
    achievementId: "career-ror-explorer",
    unlocks: "ep09",
    accessibilitySummary:
      "This episode compares a four-year degree, a shorter credential, and an unpaid experience path using BLS earnings ranges as general reference, not guarantees.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep09",
    act: 2,
    title: "Taxes, Filing, and Records",
    subtitle: "Why taxes exist and how filing actually works",
    estimatedMinutes: 13,
    learningObjectives: [
      "Explain why income, payroll, sales, and property taxes exist",
      "Distinguish filing from paying taxes",
      "Distinguish Form W-2 from Form 1099",
      "Explain the difference between deductions and credits",
      "Describe basic record retention practices and when professional help may be appropriate"
    ],
    openingNarrative:
      "Tax season arrives, and {{name}} has income from a W-2 job and a small amount of freelance work reported on a 1099.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "{{name}} must decide how to approach filing taxes for the first time with both W-2 and 1099 income.",
      type: "identify_missing_info"
    },
    choices: [
      {
        id: "a",
        text: "Use free tax filing software and review each entry carefully",
        whyChosen: "Some learners want a guided but low-cost option while still checking the details.",
        possibleBenefit: "Software walks through required forms and catches common errors.",
        possibleCost: "Some free tiers have income limits or charge for more complex situations like 1099 income.",
        possibleRisk: "Software output should still be reviewed — it can't catch a wrong entry that looks internally consistent.",
        immediateEffect: { financialKnowledge: 3, taxReserve: 0 },
        futureEffect: "Understanding this year's return makes next year's filing faster and less stressful.",
        whatCouldChangeThisOutcome: "More complex income sources in future years might justify professional help.",
        sourceIds: ["irs-filing", "irs-form-w2"]
      },
      {
        id: "b",
        text: "Set aside a portion of the 1099 income for estimated taxes throughout the year rather than waiting until filing",
        whyChosen: "Some learners with self-employment income want to avoid a large surprise bill.",
        possibleBenefit: "Reduces the risk of an underpayment penalty and a large lump-sum tax bill.",
        possibleCost: "Requires ongoing discipline to set aside money from irregular income throughout the year.",
        possibleRisk: "Under-setting-aside can still leave a balance due, just a smaller one.",
        immediateEffect: { financialKnowledge: 3, taxReserve: 400 },
        futureEffect: "This habit becomes increasingly valuable as self-employment or freelance income grows.",
        whatCouldChangeThisOutcome: "A change in the proportion of 1099 versus W-2 income would call for revisiting the estimated amount.",
        sourceIds: ["irs-filing"]
      },
      {
        id: "c",
        text: "Ask a paid tax preparer to handle everything without reviewing it personally",
        whyChosen: "Some learners feel overwhelmed by having two income types in one return.",
        possibleBenefit: "Professional help can catch issues a first-time filer might miss.",
        possibleCost: "Preparer fees reduce the value of any refund or add to a balance due.",
        possibleRisk: "Not reviewing the return personally means missing an opportunity to learn how the numbers work.",
        immediateEffect: { financialKnowledge: 1, cashOnHand: -100 },
        futureEffect: "This can work well long-term, but understanding the basics helps evaluate whether the preparer's work looks reasonable.",
        whatCouldChangeThisOutcome: "Asking the preparer to explain a few key lines can build understanding without doing it all personally.",
        sourceIds: ["irs-filing"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} spends an evening working through the software, double-checking W-2 and 1099 entries.",
      b: "{{name}} starts moving a portion of each freelance payment into a separate account.",
      c: "{{name}} hands over documents to a preparer and waits for the completed return."
    },
    oneYearConsequences: {
      a: "{{name}} files confidently the following year, recognizing most of the forms already.",
      b: "{{name}} has no surprise tax bill because the estimated amount was already set aside.",
      c: "{{name}} still feels uncertain about how the numbers were calculated."
    },
    longTermConsequences: {
      a: "Reviewing tax software output, rather than blindly trusting it, builds a skill that reduces errors over time.",
      b: "Proactively setting aside money for estimated taxes is one of the most effective habits for anyone with self-employment income.",
      c: "Professional help can be valuable, especially as situations get more complex, but personal understanding still has long-term value."
    },
    recoveryPath:
      "A tax return can be amended if an error is found, and a payment plan can be arranged with the IRS if a balance due can't be paid immediately.",
    conceptExplanation: {
      what: "Taxes fund public services and government functions; income tax, payroll tax, sales tax, and property tax each apply differently.",
      why: "Filing is the process of reporting income and calculating tax owed; paying is separately settling any balance due, which can happen before, during, or after filing.",
      how: "A W-2 reports employee wages and withholding; a 1099 reports non-employee income, generally with no tax withheld, requiring the recipient to plan for it directly.",
      cost: "Self-employment income generally carries additional tax obligations not automatically withheld, unlike W-2 wages.",
      risks: "Failing to set aside money for 1099 income, or failing to file at all, can lead to penalties and interest.",
      whoMayBenefit: "People with straightforward W-2-only income often find filing simpler and less costly to complete.",
      whoMayNotBenefit: "People with multiple income types, self-employment, or complex deductions may benefit from professional review.",
      misunderstandingRisk: "Assuming a 1099 form means 'no taxes owed because nothing was withheld' is a common and costly misunderstanding.",
      verifyNote: "Current tax brackets, standard deduction amounts, and filing thresholds change; always verify current figures directly at irs.gov before filing."
    },
    realWorldExample:
      "Noah, a fictional animal science major, was surprised by a balance due after his first year of freelance tutoring income; the next year, he set aside a portion of each payment and had no surprise at filing time. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is a key difference between W-2 and 1099 income for tax purposes?",
        type: "multiple_choice",
        options: [
          "There is no meaningful difference",
          "W-2 income generally has taxes withheld by the employer; 1099 income generally does not, requiring the recipient to plan for taxes",
          "1099 income is never taxable",
          "W-2 income is only for temporary jobs"
        ],
        correctAnswer: "W-2 income generally has taxes withheld by the employer; 1099 income generally does not, requiring the recipient to plan for taxes",
        explanation: "This distinction is central to why self-employed or freelance workers often need to set aside money proactively for taxes."
      }
    ],
    sourceIds: ["irs-filing", "irs-form-w2"],
    achievementId: "tax-translator",
    unlocks: "ep10",
    accessibilitySummary:
      "This episode compares filing approaches for someone with both W-2 and 1099 income, without stating specific current tax rates.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "ep10",
    act: 2,
    title: "Benefits Are Part of Compensation",
    subtitle: "Comparing total compensation, not just salary",
    estimatedMinutes: 13,
    learningObjectives: [
      "Distinguish salary from total compensation",
      "Identify common benefits: health insurance, retirement plans, employer match, paid leave, disability, life insurance",
      "Explain vesting and how it affects retirement benefits",
      "Compare job offers using total compensation rather than salary alone"
    ],
    openingNarrative:
      "{{name}} receives two job offers after graduation and has to compare more than just the number on the offer letter.",
    personalizationSlots: ["ep10.benefits_context"],
    approvedStoryFragments: ["ep10.benefits_context"],
    scenario: {
      prompt:
        "{{name}} compares Offer A (higher salary, modest benefits) against Offer B (lower salary, strong health coverage, a 4% retirement match, and more paid leave).",
      type: "compare_total_cost"
    },
    choices: [
      {
        id: "a",
        text: "Choose Offer A for the higher salary",
        whyChosen: "Some learners prioritize take-home cash flow, especially with near-term goals or debt.",
        possibleBenefit: "More immediate cash flow for near-term goals like debt payoff or a rent deposit.",
        possibleCost: "Weaker benefits may mean higher out-of-pocket health costs and no retirement match.",
        possibleRisk: "No employer retirement match means missing out on what is effectively additional compensation.",
        immediateEffect: { monthlyCashFlow: 300, retirementAssets: 0 },
        futureEffect: "Without an employer match, {{name}} would need to save more independently to reach the same retirement outcome.",
        whatCouldChangeThisOutcome: "{{name}} could open an individual retirement account to build savings independently.",
        sourceIds: ["irs-retirement-plans"]
      },
      {
        id: "b",
        text: "Choose Offer B for the stronger total compensation",
        whyChosen: "Some learners prioritize long-term value and risk protection over maximum take-home pay.",
        possibleBenefit: "Employer retirement match is essentially free additional compensation; stronger health coverage reduces financial risk.",
        possibleCost: "Lower immediate take-home pay compared to Offer A.",
        possibleRisk: "Vesting schedules mean the employer match may not be fully owned until a certain length of employment.",
        immediateEffect: { monthlyCashFlow: 150, retirementAssets: 200 },
        futureEffect: "Over years, an employer match can add substantially to retirement savings compared to no match at all.",
        whatCouldChangeThisOutcome: "Understanding the specific vesting schedule clarifies how much of the match is actually guaranteed if {{name}} leaves early.",
        sourceIds: ["irs-retirement-plans"]
      },
      {
        id: "c",
        text: "Negotiate with Offer A's employer for better benefits or a small raise",
        whyChosen: "Some learners want to try improving the weaker offer rather than choosing between two fixed options.",
        possibleBenefit: "A successful negotiation could close the gap between the two offers.",
        possibleCost: "Negotiation takes time and isn't guaranteed to succeed.",
        possibleRisk: "Some employers have little flexibility on standard benefit packages, especially for entry-level roles.",
        immediateEffect: { monthlyCashFlow: 300, financialKnowledge: 2 },
        futureEffect: "Practicing negotiation is a skill useful in every future job change, regardless of this specific outcome.",
        whatCouldChangeThisOutcome: "If negotiation succeeds, this choice could end up combining benefits of both offers.",
        sourceIds: ["irs-retirement-plans"]
      }
    ],
    immediateConsequences: {
      a: "{{name}} accepts Offer A and starts with a noticeably larger paycheck.",
      b: "{{name}} accepts Offer B and starts contributing to the retirement plan right away to capture the match.",
      c: "{{name}} schedules a call with Offer A's HR team to discuss the benefits package."
    },
    oneYearConsequences: {
      a: "{{name}} has more cash flow but no retirement contributions started through an employer.",
      b: "{{name}} has a year of retirement contributions plus employer match, though not yet fully vested.",
      c: "{{name}}'s negotiation outcome shapes whether this path resembles Offer A or something closer to Offer B."
    },
    longTermConsequences: {
      a: "Higher salary without benefits can work well for someone prioritizing flexibility or near-term goals, but shifts more responsibility for retirement and health costs onto the individual.",
      b: "Employer-matched retirement contributions, compounded over a career, often represent a substantial part of long-term wealth building.",
      c: "Negotiating is not guaranteed to work, but practicing it has no long-term downside and can pay off directly in this decision."
    },
    recoveryPath:
      "A benefits-light job can still allow independent retirement saving, and a first job's total compensation isn't permanent — it can be renegotiated or changed at the next opportunity.",
    conceptExplanation: {
      what: "Total compensation includes salary plus the value of benefits like health insurance, retirement contributions, paid leave, and disability or life insurance.",
      why: "Comparing only salary between job offers can hide significant differences in long-term financial value.",
      how: "An employer retirement match effectively adds free money to a retirement account, subject to vesting rules that determine when it's fully owned.",
      cost: "Benefits-rich offers sometimes trade lower immediate take-home pay for long-term value and risk protection.",
      risks: "Leaving a job before benefits vest can mean forfeiting some employer-contributed retirement money.",
      whoMayBenefit: "People planning to stay with an employer for several years often benefit most from vesting-dependent benefits.",
      whoMayNotBenefit: "Someone planning to change jobs frequently may value immediate salary over benefits that take years to fully vest.",
      misunderstandingRisk: "Comparing only the salary number between two job offers can lead to underestimating a benefits-rich offer's real value.",
      verifyNote: "Contribution limits, vesting rules, and benefit details vary by employer and by year — review the specific plan documents for any real offer."
    },
    realWorldExample:
      "Chris, a fictional recent nursing-program graduate, initially wanted to take the higher-salary offer, but after calculating the multi-year value of the retirement match and better health coverage, chose the other offer instead. This illustrative example is not a real person.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What does 'vesting' refer to in a retirement plan?",
        type: "multiple_choice",
        options: [
          "The total amount an employee can contribute per year",
          "The schedule determining when an employee fully owns employer-contributed retirement funds",
          "A tax penalty for early withdrawal",
          "The interest rate applied to retirement contributions"
        ],
        correctAnswer: "The schedule determining when an employee fully owns employer-contributed retirement funds",
        explanation: "Vesting schedules determine how much of an employer's contribution an employee keeps if they leave before a certain point."
      }
    ],
    sourceIds: ["irs-retirement-plans"],
    achievementId: "benefit-detective",
    unlocks: "ep11",
    accessibilitySummary:
      "This episode compares two job offers by total compensation, not just salary, including retirement match and vesting.",
    reviewedDate: "2026-07-10"
  }
];
