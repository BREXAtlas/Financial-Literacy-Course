// Ram Ready Financial Futures — Future Wealth Quest, Quests 11-20
// Tier III (~$100M-$1B): quests 11-15. Tier IV ($1B+ systems): quests 16-20.
// These tiers describe systems of ownership, governance, and risk — not a
// ranking of human worth. All real-world examples are fictional illustrations, not real people or organizations.
// no living person is named or depicted.

export const QUESTS_PART2 = [
  {
    id: "q11",
    tier: 3,
    title: "Family Office or Outsourced Experts",
    subtitle: "When does hiring a dedicated team make sense — and when is it overkill?",
    estimatedMinutes: 15,
    learningObjectives: [
      "Distinguish a single-family office from a multi-family office and from outsourced professional services",
      "Identify the cost, privacy, and control tradeoffs of each model",
      "Recognize the internal-control and cybersecurity practices that protect any of these structures",
      "Explain why complexity should be justified by need, not by prestige"
    ],
    openingNarrative:
      "By the time a household's assets span multiple businesses, properties, and investment accounts, the question stops being \"who manages this?\" and becomes \"how many people, and organized how?\" This quest is about systems for coordinating complexity, not a status symbol.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional family's assets — a private business, real estate, and a growing investment portfolio — have outgrown one bookkeeper and a part-time CPA. The family is deciding how to organize ongoing financial management.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Build a single-family office: hire full-time staff (controller, investment analyst, admin) dedicated only to this family.",
        whyChosen: "Maximum control, privacy, and customization once asset complexity justifies fixed overhead.",
        possibleBenefit: "Undivided attention, tailored reporting, and direct oversight of every decision.",
        possibleCost: "High fixed cost — salaries, benefits, office space, and technology — regardless of market performance.",
        possibleRisk: "Key-person dependency, understaffing during a crisis, and cybersecurity exposure if internal controls are weak.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 4 },
        futureEffect: "Fixed costs must be justified by asset scale for years to make sense relative to alternatives.",
        whatCouldChangeThisOutcome: "A drop in total assets or business income can make a single-family office's fixed cost proportionally much heavier.",
        sourceIds: ["frb-scf", "sec-working-with-professional"]
      },
      {
        id: "b",
        text: "Join a multi-family office that serves several unrelated families and shares overhead costs.",
        whyChosen: "Access to professional-grade coordination without building an entire team from scratch.",
        possibleBenefit: "Lower relative cost, established processes, and broader expertise across specialists.",
        possibleCost: "Shared attention across multiple client families and less customization than a dedicated team.",
        possibleRisk: "Conflicts of interest if the multi-family office also sells proprietary investment products.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 4 },
        futureEffect: "Fee structure and any product conflicts should be reviewed regularly as the relationship continues.",
        whatCouldChangeThisOutcome: "Discovering an undisclosed conflict of interest would require reassessing the relationship immediately.",
        sourceIds: ["sec-adviser-info", "finra-brokercheck"]
      },
      {
        id: "c",
        text: "Keep outsourcing to independent professionals (CPA, attorney, adviser) without a dedicated office structure.",
        whyChosen: "Flexibility, no fixed overhead, and the ability to change any single professional relationship independently.",
        possibleBenefit: "Lower baseline cost and the ability to hire specialists exactly when needed.",
        possibleCost: "More coordination burden falls on the family itself; no single point of oversight.",
        possibleRisk: "Gaps between professionals — no one owns the full picture, which can let issues slip through.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 3 },
        futureEffect: "As complexity grows, coordination overhead can become its own hidden cost.",
        whatCouldChangeThisOutcome: "A missed deadline or communication gap between professionals could prompt a move toward a more formal structure.",
        sourceIds: ["sec-working-with-professional"]
      }
    ],
    immediateConsequences: {
      a: "The family gains dedicated staff and pays a fixed annual cost immediately.",
      b: "The family gains shared professional infrastructure at a lower relative cost.",
      c: "The family keeps flexibility but must personally coordinate across separate professionals."
    },
    oneYearConsequences: {
      a: "Reporting becomes highly customized; the family evaluates whether the fixed cost is still proportionate to asset growth.",
      b: "The family benchmarks the multi-family office's fee and service quality against alternatives.",
      c: "The family reassesses whether coordination gaps caused any missed opportunities or errors."
    },
    longTermConsequences: {
      a: "A single-family office can become a durable asset if the family's complexity continues to grow, or an oversized cost if it does not.",
      b: "A multi-family office relationship can scale smoothly but requires ongoing conflict-of-interest vigilance.",
      c: "Continued outsourcing without central coordination can work indefinitely for simpler situations but strain under real complexity."
    },
    recoveryPath:
      "Any of these models can be changed. Families routinely start with outsourced professionals, move to a multi-family office as complexity grows, and only build a single-family office if the numbers justify it — moving in the other direction is also common when a family's needs simplify.",
    conceptExplanation: {
      what: "A family office is a dedicated organizational structure for coordinating a family's investments, taxes, legal affairs, and administration. It can be single-family (serving one family), multi-family (serving several), or replaced by simply outsourcing to independent professionals.",
      why: "As financial complexity grows across entities, accounts, and generations, coordination itself becomes a job that benefits from dedicated attention.",
      how: "Staff or outsourced professionals handle bookkeeping, investment oversight, tax coordination, and administrative tasks under a shared reporting structure.",
      cost: "Ranges from professional hourly and retainer fees to multi-million-dollar annual overhead for large single-family offices.",
      risks: "Key-person dependency, weak internal controls, cybersecurity exposure, and conflicts of interest in fee-based structures.",
      whoMayBenefit: "Families whose complexity (multiple entities, generations, or advisers) creates real coordination costs.",
      whoMayNotBenefit: "Households whose assets and affairs remain simple enough that outsourced professionals handle everything efficiently.",
      misunderstandingRisk: "Assuming a family office is a status requirement rather than a cost-benefit decision tied to actual complexity.",
      verifyNote: "Fee structures and conflict disclosures should be verified directly with any professional or firm being considered."
    },
    realWorldExample:
      "A fictional family that sold a regional business for a large sum initially over-hired a full internal staff, then downsized to a lean multi-family office arrangement once they realized their ongoing complexity did not justify the original overhead.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What primarily justifies the cost of a single-family office?",
        type: "multiple_choice",
        options: [
          "Prestige and appearance",
          "The scale and complexity of the family's financial affairs",
          "A legal requirement above a certain net worth",
          "Avoiding all taxes"
        ],
        correctAnswer: "The scale and complexity of the family's financial affairs",
        explanation: "Family offices are a cost-benefit decision tied to real coordination needs, not a legal requirement or a guaranteed tax strategy."
      },
      {
        id: "kc2",
        question: "What is a key risk of a multi-family office model?",
        type: "multiple_choice",
        options: [
          "It always costs more than a single-family office",
          "Possible conflicts of interest if it sells proprietary products",
          "It cannot legally serve more than one family",
          "It eliminates the need for a CPA"
        ],
        correctAnswer: "Possible conflicts of interest if it sells proprietary products",
        explanation: "Shared-service models can create incentives to recommend in-house products; disclosure and verification matter."
      }
    ],
    sourceIds: ["frb-scf", "sec-working-with-professional", "sec-adviser-info", "finra-brokercheck"],
    achievementId: "family-office-analyst",
    unlocks: "q12",
    accessibilitySummary: "Multiple-choice scenario with full text alternatives to any comparison table; no color-only distinctions used.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q12",
    tier: 3,
    title: "Governance Prevents Expensive Confusion",
    subtitle: "Written rules, not good intentions, are what keep money mistakes small.",
    estimatedMinutes: 14,
    learningObjectives: [
      "Define governance structures such as boards, committees, and separation of duties",
      "Explain why written policies reduce disputes and errors",
      "Identify the role of audits and whistleblowing channels in catching problems early",
      "Recognize conflicts of interest and how disclosure requirements address them"
    ],
    openingNarrative:
      "Money problems at scale are rarely one villain — they are usually a missing rule. This quest looks at the unglamorous infrastructure — boards, approvals, audits — that keeps large sums of money from becoming a source of conflict or fraud.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional family business has grown to include several family members in leadership roles, outside investors, and a lender. A large discretionary expense request comes in with no formal approval process in place.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Establish a written spending-authority policy requiring dual sign-off above a set dollar threshold.",
        whyChosen: "Creates an objective rule that applies to everyone, reducing both fraud risk and family conflict.",
        possibleBenefit: "Clear expectations prevent both accidental overspending and disputes about fairness.",
        possibleCost: "Slower decision-making for large purchases; some administrative overhead.",
        possibleRisk: "A poorly designed threshold could still be circumvented by splitting transactions.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 4 },
        futureEffect: "Consistent policy application builds trust among family members and outside investors.",
        whatCouldChangeThisOutcome: "Detecting transaction-splitting behavior would require tightening the policy or adding review triggers.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "b",
        text: "Rely on the founder's personal judgment for all major spending decisions, as has been done historically.",
        whyChosen: "Feels efficient and preserves the founder's authority and speed of decision-making.",
        possibleBenefit: "Fast decisions with no bureaucratic delay.",
        possibleCost: "No independent check on any single decision, however large.",
        possibleRisk: "A single point of failure — mistakes, health events, or disputes can halt or damage the whole operation.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 2 },
        futureEffect: "Outside investors and lenders may demand governance changes before providing more capital.",
        whatCouldChangeThisOutcome: "A health event, dispute, or investor requirement could force governance changes under pressure rather than by choice.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "c",
        text: "Form an investment/spending committee with rotating family and independent members, plus an annual external audit.",
        whyChosen: "Combines internal knowledge with independent oversight and periodic external verification.",
        possibleBenefit: "Reduces both fraud risk and the appearance of favoritism; builds credibility with lenders and investors.",
        possibleCost: "Ongoing committee time commitment and audit fees.",
        possibleRisk: "Committee gridlock if members disagree and no tie-breaking process exists.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 5 },
        futureEffect: "External audits create a paper trail that protects the family in disputes or regulatory review.",
        whatCouldChangeThisOutcome: "Persistent committee gridlock would require adding a clear tie-breaking rule.",
        sourceIds: ["frb-scf"]
      }
    ],
    immediateConsequences: {
      a: "A written policy is adopted and communicated to all decision-makers.",
      b: "The founder retains full authority with no independent check in place.",
      c: "A governance committee and audit cycle are established."
    },
    oneYearConsequences: {
      a: "Disputes about specific expenses decline because the rule, not a person, made the call.",
      b: "At least one decision draws internal disagreement with no formal process to resolve it.",
      c: "The first external audit surfaces minor process gaps that get corrected."
    },
    longTermConsequences: {
      a: "Clear governance tends to make future fundraising, partnerships, or a business sale smoother.",
      b: "Concentrated, undocumented authority can become a liability during succession or a dispute.",
      c: "Ongoing governance discipline builds a track record that outside capital providers value."
    },
    recoveryPath:
      "Governance can be introduced at any stage — even a business or family that has operated informally for years can adopt written policies, committees, and audits starting immediately; the transition itself is often the hardest part, not the ongoing practice.",
    conceptExplanation: {
      what: "Governance is the set of written rules, roles, and oversight processes that determine how financial decisions get made and checked.",
      why: "Without governance, decisions depend entirely on individual judgment and trust, which does not scale and does not survive disputes, health events, or succession.",
      how: "Boards, committees, separation of duties (the person who approves is not the person who executes), audits, and written policies each add a layer of independent verification.",
      cost: "Time, committee overhead, and audit fees — real but generally small relative to the risks they reduce at scale.",
      risks: "Poorly designed governance can create gridlock; well-designed governance still cannot catch every problem.",
      whoMayBenefit: "Any organization or family managing significant shared assets across multiple people.",
      whoMayNotBenefit: "A very small, simple operation may find formal governance to be disproportionate overhead — though even simple structures benefit from at least a written spending policy.",
      misunderstandingRisk: "Assuming governance is only needed after something goes wrong, rather than as ongoing prevention.",
      verifyNote: "Specific governance and audit requirements vary by entity type and should be reviewed with a qualified attorney or CPA."
    },
    realWorldExample:
      "A fictional multi-generational family business avoided a costly dispute over a large equipment purchase only because a written dual-approval policy already existed — without it, the disagreement would have had no objective resolution process.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is 'separation of duties' meant to prevent?",
        type: "multiple_choice",
        options: [
          "Slow decision-making",
          "One person having both approval and execution power over the same transaction",
          "The need for any audits",
          "Family members working together"
        ],
        correctAnswer: "One person having both approval and execution power over the same transaction",
        explanation: "Separation of duties creates an independent check that reduces both error and fraud risk."
      },
      {
        id: "kc2",
        question: "Why might outside investors or lenders push for stronger governance?",
        type: "multiple_choice",
        options: [
          "They enjoy bureaucracy",
          "Governance reduces the risk their capital is mismanaged or a single point of failure sinks the business",
          "It is required by all state laws regardless of entity type",
          "It eliminates all financial risk"
        ],
        correctAnswer: "Governance reduces the risk their capital is mismanaged or a single point of failure sinks the business",
        explanation: "Outside capital providers have a direct financial interest in how decisions get made and checked."
      }
    ],
    sourceIds: ["frb-scf"],
    achievementId: "governance-guardian",
    unlocks: "q13",
    accessibilitySummary: "Text-based scenario and consequences; no reliance on visual-only cues.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q13",
    tier: 3,
    title: "Concentrated Stock and Liquidity",
    subtitle: "Owning a lot of one company's stock is not the same as having cash.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Explain what founder or employer stock concentration means and why it happens",
      "Identify lockups, volatility, and tax consequences of concentrated positions",
      "Understand diversification and hedging as concepts without receiving personalized strategy",
      "Recognize the emotional and disclosure dynamics around selling concentrated stock"
    ],
    openingNarrative:
      "A large number on a net-worth statement can be almost entirely one company's stock. That creates a very different risk profile than the same number spread across many holdings — and selling it isn't always simple, quick, or emotionally easy.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional startup employee holds a large equity stake that is now worth many times their salary, but a lockup period is ending and the stock has been volatile.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Sell a portion immediately once the lockup ends to diversify into other assets.",
        whyChosen: "Reduces concentration risk and locks in value while the shares can legally be sold.",
        possibleBenefit: "Immediate risk reduction and increased liquidity for other goals.",
        possibleCost: "Potential tax liability on the sale and possible price impact from large trades.",
        possibleRisk: "If the stock continues rising, selling early means missing further gains.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 4 },
        futureEffect: "A diversified position is less exposed to any single company's future performance.",
        whatCouldChangeThisOutcome: "A change in personal cash needs or tax situation could shift the ideal pace of selling.",
        sourceIds: ["sec-stocks", "sec-investing-basics"]
      },
      {
        id: "b",
        text: "Hold the full position, believing in the company's continued growth.",
        whyChosen: "Confidence in the company and potential for greater long-term gains.",
        possibleBenefit: "Full participation in any further appreciation.",
        possibleCost: "No diversification benefit; net worth remains tied to one company's fortunes.",
        possibleRisk: "A single bad quarter, scandal, or market shift could sharply reduce the position's value with no offset.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 3 },
        futureEffect: "Emotional attachment to the company can make an eventual sale harder even when it becomes financially prudent.",
        whatCouldChangeThisOutcome: "A material change in the company's outlook or the employee's personal liquidity needs could prompt reconsideration.",
        sourceIds: ["sec-stocks"]
      },
      {
        id: "c",
        text: "Sell on a fixed, pre-scheduled basis over time (a systematic diversification plan) regardless of price movement.",
        whyChosen: "Removes emotion and market-timing guesswork from the decision by committing to a schedule in advance.",
        possibleBenefit: "Reduces concentration gradually while avoiding the pressure of trying to time a single sale perfectly.",
        possibleCost: "Some sales will happen at less favorable prices than a well-timed lump sum might achieve.",
        possibleRisk: "Public disclosure rules may apply to insiders selling on a schedule, adding compliance complexity.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 5 },
        futureEffect: "A predictable, disciplined diversification path over months or years.",
        whatCouldChangeThisOutcome: "Insider status or material nonpublic information can restrict when and how these plans may be set up or modified.",
        sourceIds: ["sec-stocks", "sec-investing-basics"]
      }
    ],
    immediateConsequences: {
      a: "Some diversification occurs immediately, along with a taxable event.",
      b: "Net worth remains fully concentrated in one company.",
      c: "A structured, gradual selling plan begins."
    },
    oneYearConsequences: {
      a: "Reduced volatility in overall net worth as other assets grow independently of the original company.",
      b: "Net worth may have grown or shrunk dramatically depending entirely on that one company's performance.",
      c: "A portion of the position has been diversified on schedule regardless of price swings."
    },
    longTermConsequences: {
      a: "A diversified portfolio is generally more resilient to any single company's setbacks.",
      b: "Concentrated holding can produce outsized gains or losses; outcomes vary enormously by company and timing.",
      c: "Systematic plans tend to produce a smoother, more predictable diversification path over time."
    },
    recoveryPath:
      "Diversification can begin at any point after a lockup or vesting restriction lifts; even a concentrated position that has already dropped in value can still be diversified going forward to reduce future risk.",
    conceptExplanation: {
      what: "Concentrated stock is a large holding in a single company's shares, often from founder equity, employee stock grants, or an inheritance.",
      why: "Compensation and inheritance often arrive as company stock rather than cash, creating concentration by default rather than by deliberate choice.",
      how: "Lockup periods (post-IPO restrictions), vesting schedules, and insider trading rules govern when and how shares can be sold.",
      cost: "Selling can trigger capital gains taxes and, for large blocks, potential price impact on the stock itself.",
      risks: "Volatility, company-specific risk, and emotional attachment can all delay diversification longer than may be prudent.",
      whoMayBenefit: "Employees, founders, or heirs whose wealth is concentrated may benefit from understanding these dynamics before a lockup ends.",
      whoMayNotBenefit: "Not everyone in this position wants to diversify — some deliberately choose continued concentration accepting the added risk.",
      misunderstandingRisk: "Treating a large concentrated position as equivalent to the same dollar amount in cash or a diversified portfolio.",
      verifyNote: "Insider trading rules, disclosure requirements, and tax treatment should be verified with a securities attorney and CPA before any sale."
    },
    realWorldExample:
      "A fictional early employee at a technology company held equity worth many years of salary, but had to work with legal counsel to understand disclosure rules before any shares could be sold following the company's public offering.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why might a lockup period exist after a company goes public?",
        type: "multiple_choice",
        options: [
          "To guarantee employees a minimum sale price",
          "To restrict early shareholders from selling immediately, which could flood the market with shares",
          "To eliminate all taxes on the sale",
          "It is required for every private company sale"
        ],
        correctAnswer: "To restrict early shareholders from selling immediately, which could flood the market with shares",
        explanation: "Lockups protect against a sudden supply shock right after a public offering."
      },
      {
        id: "kc2",
        question: "What is a key risk of holding a large concentrated stock position?",
        type: "multiple_choice",
        options: [
          "It always underperforms diversified portfolios",
          "Net worth becomes highly dependent on a single company's performance",
          "It is illegal to hold concentrated stock",
          "It eliminates the need for any tax planning"
        ],
        correctAnswer: "Net worth becomes highly dependent on a single company's performance",
        explanation: "Concentration risk means a single company's setback can disproportionately affect total net worth."
      }
    ],
    sourceIds: ["sec-stocks", "sec-investing-basics"],
    achievementId: "liquidity-strategist",
    unlocks: "q14",
    accessibilitySummary: "Scenario presented as plain text choices with no reliance on charts.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q14",
    tier: 3,
    title: "Borrowing Against Assets—Why It Exists and What Can Break",
    subtitle: "\"Buy, borrow, die\" is a shorthand, not a guarantee.",
    estimatedMinutes: 16,
    calculatorType: "marginCallStressTest",
    learningObjectives: [
      "Explain securities-backed lending, margin loans, and asset-backed credit lines",
      "Identify collateral requirements, loan-to-value ratios, and margin calls",
      "Understand why borrowing against assets is not free money and must still be repaid",
      "Recognize the popular phrase 'buy, borrow, die' as shorthand with real limitations, not a loophole"
    ],
    openingNarrative:
      "There is a popular idea that very wealthy people never need to sell assets — they simply borrow against them. That is a real practice with a real mechanism, and it is also a practice with real, sometimes severe, failure modes that get left out of the shorthand version.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional business owner with a large, mostly illiquid net worth (concentrated stock and real estate) wants funds for a new opportunity without selling appreciated assets and triggering capital gains taxes.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Take a securities-backed loan using a diversified investment portfolio as collateral.",
        whyChosen: "Avoids an immediate taxable sale and can offer relatively lower interest rates due to the collateral.",
        possibleBenefit: "Access to funds without selling assets or realizing capital gains immediately.",
        possibleCost: "Ongoing interest expense, which compounds if not paid down.",
        possibleRisk: "If the collateral's value falls, the lender can issue a margin call requiring more collateral or forced sale of the underlying assets — often at the worst possible time, when markets are down.",
        immediateEffect: { totalAssets: 0, debtBalance: 0, financialKnowledge: 5 },
        futureEffect: "The loan must be repaid or refinanced; rates may be variable and can rise.",
        whatCouldChangeThisOutcome: "A market downturn reducing collateral value could trigger a margin call regardless of the business owner's other plans.",
        sourceIds: ["sec-investing-basics", "sipc-protection"]
      },
      {
        id: "b",
        text: "Sell a portion of the appreciated assets outright to fund the opportunity.",
        whyChosen: "Avoids taking on new debt and the associated collateral and margin-call risk.",
        possibleBenefit: "No interest expense and no forced-liquidation risk from a lender.",
        possibleCost: "Triggers capital gains tax on the appreciated portion sold.",
        possibleRisk: "Loses future appreciation potential on the sold portion of the asset.",
        immediateEffect: { totalAssets: 0, taxReserve: 0, financialKnowledge: 4 },
        futureEffect: "Net worth composition shifts from the sold asset class into cash or the new opportunity.",
        whatCouldChangeThisOutcome: "A change in capital gains tax rates could shift the relative cost of this option in future years.",
        sourceIds: ["irs-filing"]
      },
      {
        id: "c",
        text: "Use a business line of credit secured against business assets rather than personal securities.",
        whyChosen: "Keeps personal and business borrowing separate and may align better with the purpose of the funds.",
        possibleBenefit: "Business-purpose borrowing can be more directly tied to the opportunity's expected returns.",
        possibleCost: "Business assets become collateral, adding risk to the operating business itself.",
        possibleRisk: "If the business underperforms, both the new opportunity and the core business could be strained simultaneously.",
        immediateEffect: { totalAssets: 0, debtBalance: 0, financialKnowledge: 5 },
        futureEffect: "Business cash flow must service this debt alongside normal operating expenses.",
        whatCouldChangeThisOutcome: "A downturn in the core business's revenue could make this debt harder to service than anticipated.",
        sourceIds: ["sba-choose-structure"]
      }
    ],
    immediateConsequences: {
      a: "Funds are available quickly without an immediate tax event, but a new loan obligation begins accruing interest.",
      b: "Funds are available after a taxable sale is completed and taxes are set aside.",
      c: "Funds are available through the business, with business assets now pledged as collateral."
    },
    oneYearConsequences: {
      a: "The loan balance has accrued interest; collateral value may have moved up or down, changing loan-to-value standing.",
      b: "Taxes owed on the sale have been paid; the remaining proceeds are deployed toward the new opportunity.",
      c: "The business is servicing an additional debt obligation alongside normal expenses."
    },
    longTermConsequences: {
      a: "If asset values grow faster than the loan's interest cost, this can preserve wealth efficiently — but a sustained downturn can force an unplanned sale at a bad time.",
      b: "The tax cost is fixed and known upfront, trading certainty for a smaller amount of capital deployed.",
      c: "Success depends heavily on whether the new opportunity's returns outpace the business's borrowing cost and risk."
    },
    recoveryPath:
      "A margin call or forced sale is not the end of the story — collateral can be replenished, loans can be refinanced or paid down, and a forced sale, while costly, still leaves remaining assets intact; reviewing loan-to-value cushions regularly reduces the chance of being caught by a sudden call.",
    conceptExplanation: {
      what: "Borrowing against assets means using investment portfolios, real estate, or business assets as collateral for a loan rather than selling those assets outright.",
      why: "This can defer or avoid triggering a taxable sale and preserves the borrower's ownership and any future appreciation of the asset.",
      how: "A lender extends credit up to a percentage of the collateral's value (loan-to-value), and interest accrues on the outstanding balance, sometimes at a variable rate.",
      cost: "Interest expense, which compounds over time and must be paid or added to the balance; potential fees.",
      risks: "If collateral value falls, a lender can issue a margin call demanding more collateral or immediate cash, and can force a sale of the underlying assets if the borrower cannot meet it — often during a market downturn, the worst possible time. Tax rules governing this approach, along with estate and cost-basis rules at death, are complex and can change.",
      whoMayBenefit: "Asset-rich individuals with reliable cash flow to service interest payments and a cushion against collateral value swings.",
      whoMayNotBenefit: "Anyone without reliable cash flow, a thin collateral cushion, or exposure to a single volatile asset class faces meaningfully higher risk.",
      misunderstandingRisk: "The popular phrase \"buy, borrow, die\" implies this is a guaranteed, universally available, tax-free strategy. In reality: the loan must still be repaid or serviced, interest compounds, collateral can lose value, lenders can force liquidation, tax and estate rules are complex and change, and the strategy can fail when cash flow, markets, interest rates, or family circumstances shift. It should never be treated as a loophole, a certainty, or personalized advice.",
      verifyNote: "Loan terms, margin requirements, and tax/estate treatment of asset-backed borrowing should be verified with a lender, tax professional, and estate attorney — rules and rates change."
    },
    realWorldExample:
      "A fictional business owner used a securities-backed line of credit to fund an expansion, then faced a margin call when markets fell the same year — forcing a partial, poorly timed sale of the very portfolio the loan was meant to protect.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What can happen if the value of collateral backing a securities-based loan falls significantly?",
        type: "multiple_choice",
        options: [
          "Nothing — the loan terms are always fixed",
          "The lender can issue a margin call requiring more collateral or forced liquidation",
          "The loan is automatically forgiven",
          "The borrower's credit score is immediately erased"
        ],
        correctAnswer: "The lender can issue a margin call requiring more collateral or forced liquidation",
        explanation: "Falling collateral value is one of the core risks of asset-backed borrowing, and can force a sale at an inopportune time."
      },
      {
        id: "kc2",
        question: "Why is 'buy, borrow, die' described as shorthand rather than a guaranteed strategy?",
        type: "multiple_choice",
        options: [
          "Because borrowing against assets is illegal",
          "Because it ignores compounding interest, collateral risk, margin calls, and changing tax/estate rules",
          "Because only banks are allowed to use it",
          "Because it only applies to real estate"
        ],
        correctAnswer: "Because it ignores compounding interest, collateral risk, margin calls, and changing tax/estate rules",
        explanation: "The phrase simplifies a strategy that carries real repayment, market, and legal risk, and depends on rules that can change."
      }
    ],
    sourceIds: ["sec-investing-basics", "sipc-protection", "irs-filing", "irs-estate-gift-tax"],
    achievementId: "borrowing-against-assets-analyst",
    unlocks: "q15",
    accessibilitySummary: "All consequence and risk information presented as readable text, no chart-only content.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q15",
    tier: 3,
    title: "Visibility, Security, Reputation, and Responsibility",
    subtitle: "Wealth at this scale attracts attention — and comes with obligations.",
    estimatedMinutes: 14,
    learningObjectives: [
      "Identify personal security and cybersecurity considerations for high-visibility wealth",
      "Explain how public records and media scrutiny affect privacy",
      "Recognize the responsibility that comes with employing others or running a visible organization",
      "Distinguish charitable claims from verified charitable impact"
    ],
    openingNarrative:
      "Significant, visible wealth changes the relationship between a person and the public. Property records, court filings, and press coverage all become more accessible, and decisions that once affected only one household now affect employees, communities, and reputations.",
    personalizationSlots: ["q15.context"],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional business owner's company has grown large enough to attract local media attention, and the owner is deciding how to handle personal security, public communications, and increased public scrutiny.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Invest in cybersecurity and personal security measures proportional to the new visibility.",
        whyChosen: "Addresses a real, growing risk before an incident forces a reactive response.",
        possibleBenefit: "Reduced risk of fraud, identity theft, or physical security incidents.",
        possibleCost: "Ongoing expense for security services and technology.",
        possibleRisk: "Security measures can never reduce risk to zero, and can create a false sense of complete safety.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 4 },
        futureEffect: "Proactive security investment tends to be cheaper than recovering from a major incident.",
        whatCouldChangeThisOutcome: "A specific credible threat would require an immediate reassessment of protective measures.",
        sourceIds: ["cfpb-credit-reports-scores"]
      },
      {
        id: "b",
        text: "Engage a communications professional to manage public inquiries and media relationships proactively.",
        whyChosen: "Reduces the risk of misinformation or reactive, poorly considered public statements.",
        possibleBenefit: "More control over how the business and owner are represented publicly.",
        possibleCost: "Ongoing professional fees for communications support.",
        possibleRisk: "Overly controlled messaging can itself become a reputational liability if perceived as evasive.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 4 },
        futureEffect: "A consistent public communication approach builds long-term credibility if backed by real substance.",
        whatCouldChangeThisOutcome: "A major crisis would test whether the communication strategy holds up under real pressure.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "c",
        text: "Make minimal changes, treating the increased scrutiny as a temporary phase that will pass.",
        whyChosen: "Avoids new expense and disruption to established routines.",
        possibleBenefit: "No new cost or lifestyle disruption in the short term.",
        possibleCost: "Unaddressed security gaps remain in place.",
        possibleRisk: "A security or reputational incident could arrive without any prepared response.",
        immediateEffect: { totalAssets: 0, financialKnowledge: 2 },
        futureEffect: "Continued visibility without adaptation increases exposure over time rather than reducing it.",
        whatCouldChangeThisOutcome: "A single serious incident would likely force immediate, reactive changes instead of planned ones.",
        sourceIds: ["frb-scf"]
      }
    ],
    immediateConsequences: {
      a: "Security investments begin, adding a new recurring cost.",
      b: "A communications relationship begins shaping how public inquiries are handled.",
      c: "No changes are made; existing routines and exposures continue."
    },
    oneYearConsequences: {
      a: "The owner has a tested security posture in place before any real incident occurs.",
      b: "Media relationships are established and generally more manageable than they would be reactively.",
      c: "Visibility has likely continued to grow with no corresponding change in preparedness."
    },
    longTermConsequences: {
      a: "Consistent security investment tends to reduce both the likelihood and severity of future incidents.",
      b: "A credible public reputation, once built, becomes a durable asset for the business and community relationships.",
      c: "Delayed adaptation increases the odds that any future incident is handled reactively and less effectively."
    },
    recoveryPath:
      "Security and communications capacity can be built at any point — even after a first incident, investing in both going forward reduces the likelihood and severity of future problems; it is never too late to start.",
    conceptExplanation: {
      what: "Visibility risk covers the personal security, cybersecurity, privacy, and reputational exposure that comes with running a large or well-known organization.",
      why: "Public records, employee relationships, media coverage, and community impact all scale with an organization's size and visibility.",
      how: "Security measures, communications planning, transparent charitable reporting, and legal compliance systems all reduce different facets of this exposure.",
      cost: "Ongoing investment in security, communications, and compliance staff or services.",
      risks: "No amount of preparation eliminates risk entirely; overinvestment in secrecy can itself damage trust and reputation.",
      whoMayBenefit: "Owners, executives, and organizations whose visibility has grown faster than their security and communications planning.",
      whoMayNotBenefit: "Very early-stage or low-visibility situations may not yet need this level of investment.",
      misunderstandingRisk: "Assuming that charitable claims or public statements are automatically true without independent verification, or assuming wealth alone creates unlimited responsibility for unrelated community problems.",
      verifyNote: "Claims about any organization's charitable impact, employee treatment, or compliance record should be verified through independent public reporting and filings, not marketing materials alone."
    },
    realWorldExample:
      "A fictional regional employer became a local media subject once it became the area's largest employer, and had to build both cybersecurity protections and a communications process it had never previously needed.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why does visibility increase security-related responsibility?",
        type: "multiple_choice",
        options: [
          "Because visible wealth is legally required to hire security",
          "Because greater public exposure increases the practical risk of fraud, targeting, and reputational harm",
          "Because it eliminates the need for cybersecurity",
          "Because only celebrities face this risk"
        ],
        correctAnswer: "Because greater public exposure increases the practical risk of fraud, targeting, and reputational harm",
        explanation: "Increased visibility is a practical risk factor, not a legal mandate, but it is a real one worth planning for."
      },
      {
        id: "kc2",
        question: "How should a charitable claim made in a company's marketing materials be treated?",
        type: "multiple_choice",
        options: [
          "As verified fact, since companies would not make false claims",
          "As a claim worth independently verifying through public filings or reporting",
          "As legally binding once published",
          "As irrelevant to the organization's reputation"
        ],
        correctAnswer: "As a claim worth independently verifying through public filings or reporting",
        explanation: "Marketing claims are not the same as independently verified impact; verification protects against being misled."
      }
    ],
    sourceIds: ["cfpb-credit-reports-scores", "frb-scf"],
    achievementId: "visibility-and-security-analyst",
    unlocks: "q16",
    accessibilitySummary: "Text-based scenario; no visual-only security iconography relied upon for meaning.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q16",
    tier: 4,
    title: "Billionaire Wealth Is Usually Ownership, Not Cash",
    subtitle: "A headline net-worth number is rarely a bank balance.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Explain why reported billionaire net worth is typically unrealized equity value, not cash",
      "Distinguish public-company equity from private-company ownership",
      "Understand voting control and why it can matter more than raw share count",
      "Recognize why reported net worth can change rapidly with market prices"
    ],
    openingNarrative:
      "Headlines love a single net-worth number, but that number is almost always a snapshot of unrealized ownership value — mostly stock, at a specific day's price — not spendable cash sitting anywhere. This quest is entirely about a fictional founder, not any real person.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional founder's company goes public, and financial media report the founder's net worth at a large headline figure based on the company's opening share price and the founder's ownership stake.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Treat the headline number as the founder's actual spendable wealth.",
        whyChosen: "It is the simplest interpretation of a reported figure.",
        possibleBenefit: "None — this interpretation is factually incomplete.",
        possibleCost: "Misunderstands liquidity, taxes, and market volatility entirely.",
        possibleRisk: "Leads to false assumptions about what the founder can actually spend or access without selling shares and triggering taxes and price effects.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "This misunderstanding tends to persist until corrected by learning how equity valuation actually works.",
        whatCouldChangeThisOutcome: "Learning that most of the figure is unrealized, illiquid equity would correct this assumption.",
        sourceIds: ["sec-stocks", "frb-scf"]
      },
      {
        id: "b",
        text: "Recognize the number as the value of the founder's equity stake at a single market price, most of it unrealized and illiquid.",
        whyChosen: "Reflects how these figures are actually calculated by financial media and data providers.",
        possibleBenefit: "Accurate understanding of what 'net worth' means at this scale.",
        possibleCost: "None — this is simply a more complete understanding.",
        possibleRisk: "None inherent to holding this understanding.",
        immediateEffect: { financialKnowledge: 5 },
        futureEffect: "This understanding transfers to interpreting any large reported net-worth figure accurately going forward.",
        whatCouldChangeThisOutcome: "Nothing changes this — it is simply the accurate framing.",
        sourceIds: ["sec-stocks", "frb-scf"]
      },
      {
        id: "c",
        text: "Assume the founder has an equivalent amount of cash sitting in a bank account somewhere.",
        whyChosen: "A common but inaccurate assumption based on how personal bank balances work.",
        possibleBenefit: "None — this interpretation is factually incorrect.",
        possibleCost: "Leads to unrealistic expectations about liquidity and spending capacity.",
        possibleRisk: "Same as option (a) — a foundational misunderstanding of how large net worth is actually held.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "This misunderstanding tends to persist until corrected.",
        whatCouldChangeThisOutcome: "Learning that equity and cash are entirely different forms of wealth would correct this.",
        sourceIds: ["frb-scf"]
      }
    ],
    immediateConsequences: {
      a: "The learner holds an inaccurate model of what the reported figure represents.",
      b: "The learner correctly understands the figure as mostly unrealized, illiquid equity value.",
      c: "The learner holds an inaccurate model conflating equity value with cash."
    },
    oneYearConsequences: {
      a: "Continued misunderstanding of financial news involving large net-worth figures.",
      b: "Ability to critically interpret financial media reporting on wealth accurately.",
      c: "Continued misunderstanding of financial news involving large net-worth figures."
    },
    longTermConsequences: {
      a: "Misunderstanding equity versus cash can distort broader views of wealth and inequality debates.",
      b: "Accurate understanding supports more informed participation in public conversations about wealth and policy.",
      c: "Misunderstanding equity versus cash can distort broader views of wealth and inequality debates."
    },
    recoveryPath:
      "This is a conceptual understanding, not a financial position — it can be corrected at any point simply by learning how equity valuation, liquidity, and market pricing actually work.",
    conceptExplanation: {
      what: "Most reported billionaire net worth is the market value of equity ownership in public or private companies, calculated at a specific share price on a specific day, not cash or bank deposits.",
      why: "Founders and early employees are typically compensated in equity rather than cash, and that equity's reported value moves with the company's stock price.",
      how: "Data providers multiply share count by current market price (for public companies) or by the most recent private valuation (for private companies) to produce a net-worth estimate.",
      cost: "Converting equity to cash (selling shares) can trigger capital gains taxes and, for large blocks, potential price impact.",
      risks: "Reported net worth can drop sharply and quickly if the stock price falls, without the person having done anything differently.",
      whoMayBenefit: "Understanding this helps anyone interpret financial news, wealth rankings, and public policy debates more accurately.",
      whoMayNotBenefit: "N/A — this is a conceptual literacy point relevant to any reader of financial media.",
      misunderstandingRisk: "Treating headline net-worth figures as spendable cash badly distorts understanding of both individual finances and wealth inequality debates.",
      verifyNote: "Any specific reported net-worth figure should be understood as an estimate based on a specific valuation date and methodology, subject to significant change."
    },
    realWorldExample:
      "A fictional founder's reported net worth swung by a large percentage in a single week purely because of stock price movement — with no change in the number of shares owned, business operations, or personal spending.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What does a typical headline billionaire net-worth figure primarily represent?",
        type: "multiple_choice",
        options: [
          "Cash held in bank accounts",
          "The market value of equity ownership at a specific point in time, mostly unrealized",
          "Total lifetime income earned",
          "A guaranteed, fixed amount that never changes"
        ],
        correctAnswer: "The market value of equity ownership at a specific point in time, mostly unrealized",
        explanation: "These figures are valuation snapshots of ownership stakes, not liquid cash reserves."
      },
      {
        id: "kc2",
        question: "Why can reported net worth change dramatically without any change in the person's actual holdings?",
        type: "multiple_choice",
        options: [
          "Because reported figures are usually fabricated",
          "Because the underlying stock's market price moves independently of share count",
          "Because banks adjust cash balances arbitrarily",
          "Because tax rates change daily"
        ],
        correctAnswer: "Because the underlying stock's market price moves independently of share count",
        explanation: "Since these figures are share count multiplied by price, any price movement changes the reported figure instantly."
      }
    ],
    sourceIds: ["sec-stocks", "frb-scf"],
    achievementId: "systems-wealth-analyst",
    unlocks: "q17",
    accessibilitySummary: "No leaderboard or ranking visualization used; entirely text- and scenario-based.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q17",
    tier: 4,
    title: "Valuation, Control, and Market Risk",
    subtitle: "A high valuation is an estimate, not a guaranteed sale price.",
    estimatedMinutes: 14,
    learningObjectives: [
      "Distinguish market capitalization from private valuation methodology",
      "Explain dilution and voting versus non-voting share structures",
      "Understand control premiums and their role in acquisitions",
      "Recognize that valuation is not the same as realized, guaranteed cash"
    ],
    openingNarrative:
      "A company's valuation is an estimate agreed upon by buyers, sellers, or public markets at a moment in time — not a promise that the full amount could be realized if everyone tried to sell at once.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional private company completes a funding round that values it at a high headline figure, based on the price paid for a small percentage of new shares.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Understand that this valuation is extrapolated from a small transaction and may not reflect what the whole company could sell for.",
        whyChosen: "Reflects how private valuations are actually derived from partial transactions.",
        possibleBenefit: "Accurate understanding of valuation uncertainty in private markets.",
        possibleCost: "None — this is simply a more complete understanding.",
        possibleRisk: "None inherent to holding this understanding.",
        immediateEffect: { financialKnowledge: 5 },
        futureEffect: "This understanding applies to interpreting any private company valuation headline accurately.",
        whatCouldChangeThisOutcome: "Nothing changes this — it is the accurate framing.",
        sourceIds: ["sec-investing-basics"]
      },
      {
        id: "b",
        text: "Assume the full valuation figure represents cash the company or its founders could access immediately.",
        whyChosen: "A common but inaccurate simplification.",
        possibleBenefit: "None — this interpretation is factually incomplete.",
        possibleCost: "Misunderstands liquidity and the mechanics of private valuations.",
        possibleRisk: "Leads to unrealistic expectations if the company later faces a down round or acquisition at a lower price.",
        immediateEffect: { financialKnowledge: 1 },
        futureEffect: "This misunderstanding persists until corrected by learning how private valuations work.",
        whatCouldChangeThisOutcome: "Learning that valuation is an extrapolated estimate would correct this.",
        sourceIds: ["sec-investing-basics"]
      },
      {
        id: "c",
        text: "Recognize that voting versus non-voting shares can mean two investors holding equal dollar value have very different control.",
        whyChosen: "Reflects a real structural feature of many private and public companies.",
        possibleBenefit: "Accurate understanding that dollar value and control are not always the same thing.",
        possibleCost: "None — this is simply a more complete understanding.",
        possibleRisk: "None inherent to holding this understanding.",
        immediateEffect: { financialKnowledge: 5 },
        futureEffect: "This understanding helps interpret governance disputes and acquisition dynamics accurately.",
        whatCouldChangeThisOutcome: "Nothing changes this — it is the accurate framing.",
        sourceIds: ["sec-investing-basics"]
      }
    ],
    immediateConsequences: {
      a: "The learner holds an accurate model of how private valuations are derived.",
      b: "The learner holds an inaccurate model conflating valuation with realized cash.",
      c: "The learner understands that voting structure and dollar value can diverge."
    },
    oneYearConsequences: {
      a: "Ability to critically interpret startup and private-company valuation headlines.",
      b: "Continued risk of being misled by headline valuation figures.",
      c: "Ability to understand governance and control dynamics in ownership disputes."
    },
    longTermConsequences: {
      a: "Accurate valuation literacy supports better-informed participation in any private investment decision.",
      b: "Misunderstanding valuation can lead to poor personal investment decisions if extended to any private company.",
      c: "Understanding control structures helps evaluate risk in any investment involving multiple share classes."
    },
    recoveryPath:
      "These are conceptual understandings that can be corrected at any point by learning how valuation, dilution, and voting structures actually work — no financial position is at stake in holding the wrong model, only decision quality going forward.",
    conceptExplanation: {
      what: "Valuation is an estimate of a company's total worth, often extrapolated from the price paid for a small percentage of shares in a recent transaction (a 'funding round') or from public market share price times total shares outstanding.",
      why: "Investors and companies need some agreed-upon reference point for negotiating new investment, compensation, or potential sale.",
      how: "In private markets, a small transaction's price-per-share is multiplied by total shares to estimate a full valuation. In public markets, current share price times shares outstanding produces market capitalization. Both can change quickly.",
      cost: "N/A directly, but acting on an inflated valuation assumption (for personal or business decisions) can be costly if the valuation later falls.",
      risks: "Valuations can drop significantly in a 'down round' or market decline; dilution from new share issuance can reduce existing owners' percentage stake even if their dollar value temporarily holds steady.",
      whoMayBenefit: "Anyone evaluating a private company opportunity, negotiating equity compensation, or interpreting financial media benefits from understanding this.",
      whoMayNotBenefit: "N/A — this is a broadly applicable literacy point.",
      misunderstandingRisk: "Treating a headline valuation as a guaranteed, realizable cash amount rather than a time-stamped estimate.",
      verifyNote: "Specific valuation methodologies and their assumptions should be reviewed directly in company disclosures or funding announcements, not media headlines alone."
    },
    realWorldExample:
      "A fictional private company's valuation dropped significantly in a later funding round after market conditions shifted — a 'down round' that reduced the paper value of earlier investors' and founders' stakes without any sale having occurred.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "How is a private company's valuation typically estimated after a funding round?",
        type: "multiple_choice",
        options: [
          "By auditing the company's cash reserves",
          "By extrapolating the price paid for a small percentage of new shares across all outstanding shares",
          "By government assessment",
          "By averaging all employee salaries"
        ],
        correctAnswer: "By extrapolating the price paid for a small percentage of new shares across all outstanding shares",
        explanation: "This extrapolation method is why headline valuations can be more uncertain than they appear."
      },
      {
        id: "kc2",
        question: "What does 'dilution' mean for existing shareholders?",
        type: "multiple_choice",
        options: [
          "Their shares become worth more automatically",
          "Their percentage ownership can decrease when new shares are issued",
          "They are legally removed from the company",
          "Their voting rights automatically increase"
        ],
        correctAnswer: "Their percentage ownership can decrease when new shares are issued",
        explanation: "New share issuance increases the total share count, which can reduce existing owners' proportional stake."
      }
    ],
    sourceIds: ["sec-investing-basics"],
    achievementId: "valuation-and-control-analyst",
    unlocks: "q18",
    accessibilitySummary: "Concepts explained in plain text with no reliance on charts or color coding.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q18",
    tier: 4,
    title: "Regulation, Tax, Labor, and Public Scrutiny",
    subtitle: "Large organizations sit at the center of real, competing arguments.",
    estimatedMinutes: 16,
    learningObjectives: [
      "Identify multiple legitimate perspectives on regulation, tax policy, and labor at large-organization scale",
      "Explain antitrust, public subsidies, and political influence as concepts",
      "Practice evaluating competing considerations without asserting a single correct political position",
      "Recognize accountability mechanisms that apply to large organizations"
    ],
    openingNarrative:
      "Large organizations sit inside a web of regulation, taxation, labor relationships, and public accountability where thoughtful, well-informed people genuinely disagree. This quest presents competing perspectives rather than a single correct answer.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional large employer is weighing how to respond to new proposed regulations affecting its industry. Different stakeholders — employees, competitors, regulators, and shareholders — hold different views on what the regulation should require.",
      type: "rank_tradeoffs"
    },
    choices: [
      {
        id: "a",
        text: "Support stricter regulation, viewing it as leveling the playing field and protecting workers or consumers.",
        whyChosen: "Reflects a view that well-designed rules can prevent harm and create fairer competition.",
        possibleBenefit: "Can reduce harm, build public trust, and prevent a 'race to the bottom' among competitors.",
        possibleCost: "Compliance costs may be proportionally heavier for smaller competitors than for large incumbents.",
        possibleRisk: "Poorly designed regulation can create unintended consequences or be shaped by the very organizations it targets (regulatory capture).",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "Regulatory environments shift with political and economic cycles; today's rule may be revised.",
        whatCouldChangeThisOutcome: "Evidence that a regulation created unintended harm would reasonably shift this view.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "b",
        text: "Oppose the proposed regulation, viewing it as costly, difficult to comply with, and potentially reducing competitiveness or jobs.",
        whyChosen: "Reflects a view that markets self-correct and that regulation often has unintended costs exceeding its benefits.",
        possibleBenefit: "Can preserve flexibility, lower compliance costs, and faster organizational adaptation.",
        possibleCost: "May leave gaps that allow real harms to go unaddressed.",
        possibleRisk: "Public and political pressure can grow if visible harms occur without any regulatory response.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "Public sentiment and political pressure can shift the regulatory landscape regardless of any single organization's position.",
        whatCouldChangeThisOutcome: "A high-profile harm linked to the absence of regulation would reasonably shift this view.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "c",
        text: "Propose an industry-led alternative: voluntary standards with independent third-party verification, avoiding formal regulation.",
        whyChosen: "Reflects a middle-ground view that self-regulation with real accountability can address concerns with more flexibility than law.",
        possibleBenefit: "Potentially faster to implement and adapt than formal regulation.",
        possibleCost: "Requires genuine independent verification to be credible; voluntary standards without teeth can be dismissed as public relations.",
        possibleRisk: "If verification is weak or absent, this approach may be viewed as an attempt to avoid real accountability.",
        immediateEffect: { financialKnowledge: 5 },
        futureEffect: "Credibility of this approach depends entirely on whether independent verification is real and enforced.",
        whatCouldChangeThisOutcome: "A verification failure or scandal would likely accelerate calls for formal regulation instead.",
        sourceIds: ["frb-scf"]
      }
    ],
    immediateConsequences: {
      a: "The organization takes a public position favoring regulation, which may affect relationships with industry peers.",
      b: "The organization takes a public position opposing regulation, which may affect public and regulator relationships.",
      c: "The organization proposes a middle path that requires building credible independent verification."
    },
    oneYearConsequences: {
      a: "Compliance systems are built; competitors react differently depending on their size and resources.",
      b: "Public and regulatory relationships develop based on how this position is received.",
      c: "The voluntary standard's credibility is tested by whether verification proves rigorous."
    },
    longTermConsequences: {
      a: "Regulatory positions taken publicly can shape an organization's reputation for years, for better or worse depending on outcomes.",
      b: "Opposition to regulation that is later linked to visible harm can carry lasting reputational cost; opposition followed by no harm may be seen as prescient.",
      c: "Voluntary frameworks that hold up under scrutiny can become industry models; those that fail tend to accelerate formal regulation."
    },
    recoveryPath:
      "Public positions on regulation and policy can evolve as new evidence emerges — organizations regularly revise their stated positions in response to new information, incidents, or stakeholder feedback.",
    conceptExplanation: {
      what: "Regulation, tax policy, antitrust enforcement, labor rules, and public subsidies are all mechanisms through which government and society set boundaries and incentives for large organizations.",
      why: "These mechanisms exist because large organizations can affect many people — employees, consumers, competitors, and communities — whose interests are not always automatically aligned with the organization's own decisions.",
      how: "Legislatures and regulators write rules; courts and agencies enforce them; organizations comply, lobby, litigate, or propose alternatives.",
      cost: "Compliance costs, legal costs, and political engagement costs vary widely by issue and organization size.",
      risks: "Both over-regulation and under-regulation carry real, documented risks — this quest deliberately does not resolve which risk is greater in general, because reasonable people disagree based on values and evidence interpretation.",
      whoMayBenefit: "Different stakeholders — workers, consumers, competitors, shareholders, communities — can each benefit differently depending on how these questions are resolved.",
      whoMayNotBenefit: "The same is true in reverse — different stakeholders can each bear costs depending on the resolution.",
      misunderstandingRisk: "Assuming there is one obviously correct answer to regulation, tax, or labor policy questions rather than a genuine, ongoing societal debate with legitimate competing values at stake.",
      verifyNote: "Specific regulatory, tax, and antitrust rules change over time and vary by jurisdiction and industry — always verify current requirements with legal and policy experts."
    },
    realWorldExample:
      "A fictional industry faced a proposed safety regulation where worker advocates, company leadership, and independent economists each cited credible evidence supporting different positions — illustrating that this was a genuine values-and-evidence disagreement, not a case with one obviously correct answer.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is this quest's intended approach to regulation and policy debates?",
        type: "multiple_choice",
        options: [
          "To advocate for one specific political position",
          "To present multiple legitimate perspectives and tradeoffs without partisan advocacy",
          "To argue that all regulation is harmful",
          "To argue that all regulation is beneficial"
        ],
        correctAnswer: "To present multiple legitimate perspectives and tradeoffs without partisan advocacy",
        explanation: "This topic involves genuine, ongoing societal disagreement; the course presents competing views rather than declaring a winner."
      },
      {
        id: "kc2",
        question: "Why might voluntary industry standards be viewed skeptically without independent verification?",
        type: "multiple_choice",
        options: [
          "Because voluntary standards are always illegal",
          "Because without real, independent verification they can function as public relations rather than accountability",
          "Because government never allows voluntary standards",
          "Because they always cost more than regulation"
        ],
        correctAnswer: "Because without real, independent verification they can function as public relations rather than accountability",
        explanation: "Credibility of self-regulation depends entirely on genuine, independent enforcement, not just a stated commitment."
      }
    ],
    sourceIds: ["frb-scf"],
    achievementId: "policy-and-scrutiny-analyst",
    unlocks: "q19",
    accessibilitySummary: "Rank-the-tradeoffs interaction includes a full text list alternative; no color-only signaling.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q19",
    tier: 4,
    title: "Philanthropy, Foundations, and Power",
    subtitle: "Giving is powerful — and it is not a substitute for public accountability.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Compare direct giving, nonprofit grants, donor-advised funds, and private foundations",
      "Explain administrative costs, tax rules, and transparency expectations for charitable vehicles",
      "Recognize the tension between donor control and community voice",
      "Identify unintended consequences that large philanthropic giving can create"
    ],
    openingNarrative:
      "Philanthropy at scale can do real good — and it can also concentrate decision-making power in ways that bypass public accountability. This quest asks the learner to hold both of those truths at once.",
    personalizationSlots: ["q19.context"],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "A fictional donor wants to address a community problem (such as access to educational resources) and is deciding how to structure significant charitable giving.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Establish a private foundation with the donor's family retaining full control over grant decisions.",
        whyChosen: "Maximum control over how funds are used and long-term direction of the giving.",
        possibleBenefit: "Consistent, mission-driven giving over time according to the donor's priorities.",
        possibleCost: "Administrative and compliance costs of operating a foundation, plus mandatory minimum annual distribution requirements.",
        possibleRisk: "Community members affected by the funded programs may have little or no voice in how decisions are made.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "Foundation direction can persist across generations, for better or worse, depending on ongoing governance.",
        whatCouldChangeThisOutcome: "Community feedback mechanisms could be added later to increase local voice in decisions.",
        sourceIds: ["irs-estate-gift-tax"]
      },
      {
        id: "b",
        text: "Give directly to established local nonprofits already doing this work, without creating a new structure.",
        whyChosen: "Leverages existing community knowledge and relationships rather than building new infrastructure.",
        possibleBenefit: "Faster deployment of funds and reliance on organizations with existing community trust and expertise.",
        possibleCost: "Less direct control over exactly how funds are used compared to a private foundation.",
        possibleRisk: "Requires due diligence to verify the nonprofit's transparency, effectiveness, and administrative overhead.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "Ongoing relationship and reporting depend on the chosen nonprofit's continued transparency.",
        whatCouldChangeThisOutcome: "Discovering poor nonprofit transparency or effectiveness would prompt reconsidering the recipient.",
        sourceIds: ["irs-estate-gift-tax"]
      },
      {
        id: "c",
        text: "Use a donor-advised fund to make grants over time while retaining advisory (non-binding) input on where funds go.",
        whyChosen: "Lower administrative burden than a private foundation while retaining meaningful input on giving decisions.",
        possibleBenefit: "Simpler setup and lower overhead than a full foundation, with tax treatment that can differ from direct giving.",
        possibleCost: "Some donor-advised funds have been criticized for allowing money to sit un-granted for long periods.",
        possibleRisk: "Less public transparency than a private foundation in some cases, depending on the sponsoring organization's reporting.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "The pace of actual grant-making depends on the donor's ongoing engagement, not a legal requirement in most cases.",
        whatCouldChangeThisOutcome: "A personal decision to accelerate grant recommendations would change how quickly funds reach the community.",
        sourceIds: ["irs-estate-gift-tax"]
      }
    ],
    immediateConsequences: {
      a: "A new foundation entity is created with ongoing compliance obligations.",
      b: "Funds move directly and relatively quickly to existing local organizations.",
      c: "A donor-advised fund account is established for ongoing charitable recommendations."
    },
    oneYearConsequences: {
      a: "The foundation has made its first distributions and established initial governance practices.",
      b: "The community organizations have deployed the funds according to their own existing programs.",
      c: "Some grants have been recommended and distributed; the pace depends on donor engagement."
    },
    longTermConsequences: {
      a: "A well-governed foundation can sustain community impact for decades; a poorly governed one can drift from its original purpose or accumulate funds without deploying them.",
      b: "Direct giving to established organizations tends to move money into communities faster but with less donor control over the long-term direction.",
      c: "Donor-advised funds can provide flexible, ongoing giving, but critics note funds can sit undistributed longer than in a foundation with mandatory minimum payouts."
    },
    recoveryPath:
      "Giving structures can be adjusted over time — a foundation can add community advisory input, a donor-advised fund can accelerate its grant-making pace, and direct giving relationships can be diversified — none of these choices is permanent or irreversible.",
    conceptExplanation: {
      what: "Philanthropic vehicles range from direct giving, to grants through existing nonprofits, to donor-advised funds, to private foundations — each with different control, cost, transparency, and tax characteristics.",
      why: "Different structures balance donor control, administrative simplicity, tax treatment, and community input differently, and no single structure is best for every donor or cause.",
      how: "Private foundations are separate legal entities with mandatory minimum distribution rules and public reporting requirements; donor-advised funds are accounts within a sponsoring public charity where donors recommend (but do not directly control) grants; direct giving requires no new structure at all.",
      cost: "Foundations carry ongoing administrative and compliance costs; donor-advised funds typically carry lower administrative fees; direct giving has the lowest overhead but the least structure.",
      risks: "Any of these approaches can concentrate decision-making power with the donor rather than the affected community, and can create dependency on a single funding source.",
      whoMayBenefit: "Communities and causes can benefit substantially from well-run philanthropic giving in any of these structures.",
      whoMayNotBenefit: "Communities can be underserved if giving is poorly targeted, paternalistic, or bypasses their own stated priorities.",
      misunderstandingRisk: "Assuming philanthropy automatically solves the underlying problem, or that it can substitute for public systems and accountability rather than supplementing them.",
      verifyNote: "Specific tax treatment and distribution requirements for these charitable vehicles should be verified with the IRS and a qualified tax or legal professional, as rules can change."
    },
    realWorldExample:
      "A fictional donor's private foundation funded a well-intentioned educational program that ultimately struggled because it was designed without input from the community it aimed to serve — illustrating that funding alone does not guarantee effective or welcomed impact.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is a key difference between a private foundation and a donor-advised fund?",
        type: "multiple_choice",
        options: [
          "Foundations cannot make any grants",
          "Foundations are separate legal entities with mandatory minimum distribution rules; donor-advised funds are accounts within a sponsoring public charity",
          "Donor-advised funds are illegal in most states",
          "There is no meaningful difference"
        ],
        correctAnswer: "Foundations are separate legal entities with mandatory minimum distribution rules; donor-advised funds are accounts within a sponsoring public charity",
        explanation: "This structural difference affects control, compliance obligations, and how quickly funds must be distributed."
      },
      {
        id: "kc2",
        question: "Why does this quest caution against assuming philanthropy automatically solves community problems?",
        type: "multiple_choice",
        options: [
          "Because philanthropy is never effective",
          "Because effective impact depends on community input, transparency, and avoiding unintended consequences — not just funding alone",
          "Because charitable giving is illegal",
          "Because only government can solve any community problem"
        ],
        correctAnswer: "Because effective impact depends on community input, transparency, and avoiding unintended consequences — not just funding alone",
        explanation: "Good intentions and funding do not automatically guarantee effective or welcomed outcomes without community voice and accountability."
      }
    ],
    sourceIds: ["irs-estate-gift-tax"],
    achievementId: "philanthropy-and-power-analyst",
    unlocks: "q20",
    accessibilitySummary: "All comparisons presented as readable text; no infographic-only content.",
    reviewedDate: "2026-07-10"
  },

  {
    id: "q20",
    tier: 4,
    title: "The Multi-Billion-Dollar Boardroom",
    subtitle: "The final systems simulation — what did you protect, build, risk, or change?",
    estimatedMinutes: 20,
    learningObjectives: [
      "Integrate concentrated ownership, employee, investor, lender, tax, regulatory, and community considerations into a single set of decisions",
      "Practice weighing competing stakeholder priorities with no single obviously correct answer",
      "Evaluate a final decision using evidence use, liquidity awareness, risk management, integrity, stakeholder consideration, long-term thinking, governance, and adaptability rather than money remaining alone",
      "Reflect on whether the choices made matched the life and values the learner originally envisioned"
    ],
    openingNarrative:
      "This is the capstone systems simulation. The learner manages a fictional organization — concentrated ownership, thousands of employees, outside investors, lenders, tax and regulatory obligations, a family foundation, and succession questions — through a sudden major crisis. Every choice trades one legitimate priority against another.",
    personalizationSlots: ["q20.context"],
    approvedStoryFragments: [],
    scenario: {
      prompt:
        "The fictional organization the learner leads faces a sudden major crisis: a key product line has failed unexpectedly, triggering investor concern, a lender's request for updated covenant compliance, employee anxiety about layoffs, and media attention questioning the foundation's unrelated charitable claims. The learner must decide the organization's first major response.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Prioritize liquidity and lender relationships first: draw down a credit facility, pause discretionary spending, and delay major decisions until cash position stabilizes.",
        whyChosen: "Protects the organization's survival and existing debt obligations above all else in an acute crisis.",
        possibleBenefit: "Reduces near-term risk of default or forced asset sales.",
        possibleCost: "Paused spending can slow the very recovery efforts needed to address the crisis.",
        possibleRisk: "Employees and investors may perceive this as prioritizing the balance sheet over people, damaging morale and trust.",
        immediateEffect: { liquidAssets: 0, financialKnowledge: 5 },
        futureEffect: "A stabilized cash position buys time but does not resolve the underlying product failure.",
        whatCouldChangeThisOutcome: "If cash position stabilizes quickly, resources could then be redirected toward employee and community concerns.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "b",
        text: "Prioritize employees first: commit publicly to no immediate layoffs and redirect resources toward retraining and internal communication.",
        whyChosen: "Protects the people most immediately vulnerable to the crisis and preserves organizational trust and morale.",
        possibleBenefit: "Maintains workforce stability, morale, and institutional knowledge through the crisis.",
        possibleCost: "Slower cash-position stabilization, which lenders and investors may view unfavorably.",
        possibleRisk: "If the crisis deepens, an early no-layoffs commitment may become financially unsustainable and have to be reversed.",
        immediateEffect: { financialKnowledge: 5 },
        futureEffect: "Workforce trust built now may pay off in retention and morale if the crisis resolves.",
        whatCouldChangeThisOutcome: "A deepening crisis could force a painful reversal of this commitment later.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "c",
        text: "Prioritize transparency first: commission an independent review of both the product failure and the foundation's charitable claims, publishing results regardless of outcome.",
        whyChosen: "Addresses the integrity and credibility questions directly rather than managing the narrative defensively.",
        possibleBenefit: "Can rebuild long-term trust with all stakeholders if the review is genuinely independent and the findings are acted upon.",
        possibleCost: "Short-term reputational risk if the review surfaces genuine problems; costs money and takes time.",
        possibleRisk: "A review that finds real fault will need to be followed by real corrective action, or the transparency effort itself will be seen as performative.",
        immediateEffect: { financialKnowledge: 5 },
        futureEffect: "Credibility rebuilt through genuine transparency tends to be more durable than credibility asserted through messaging alone.",
        whatCouldChangeThisOutcome: "The review's findings would determine what corrective action is required next.",
        sourceIds: ["frb-scf"]
      },
      {
        id: "d",
        text: "Prioritize the outside investors and board first: convene an emergency board session to align on a unified strategy before any public or employee communication.",
        whyChosen: "Ensures governance alignment and legal/fiduciary considerations are addressed before external commitments are made.",
        possibleBenefit: "Reduces the risk of contradictory public statements or decisions made without proper authority.",
        possibleCost: "Delays visible action toward employees, lenders, or the public while internal alignment is reached.",
        possibleRisk: "Employees and the public may perceive delay as indecision or a lack of concern during a visible crisis.",
        immediateEffect: { financialKnowledge: 4 },
        futureEffect: "A well-aligned board decision tends to produce a more consistent, defensible strategy going forward.",
        whatCouldChangeThisOutcome: "Time pressure from media or lender deadlines could force faster action before full alignment is reached.",
        sourceIds: ["frb-scf"]
      }
    ],
    immediateConsequences: {
      a: "Cash position stabilizes but employee and public concerns remain unaddressed in the first days.",
      b: "Employee trust is preserved but lenders and investors seek more information about the financial plan.",
      c: "An independent review is commissioned, with results pending and short-term reputational uncertainty in the interim.",
      d: "The board aligns on strategy, but visible external communication is delayed during the process."
    },
    oneYearConsequences: {
      a: "The organization survived the acute liquidity risk but must now separately rebuild trust with employees and the public.",
      b: "Employee morale and retention held up, but the organization had to find other ways to manage lender concerns.",
      c: "Transparency findings shaped the organization's next steps, for better or worse depending on what was found.",
      d: "A unified, board-aligned strategy guided all subsequent communication and decisions."
    },
    longTermConsequences: {
      a: "Financial survival is necessary but not sufficient — long-term trust still needs separate, deliberate rebuilding.",
      b: "Prioritizing people can build durable loyalty, but only if the organization also addresses the underlying financial and operational problem.",
      c: "Genuine transparency, followed by real corrective action, tends to produce the most durable long-term trust across all stakeholders.",
      d: "Strong governance alignment supports consistent decision-making, but must still be paired with timely action toward employees, lenders, and the public."
    },
    recoveryPath:
      "No single first move determines the organization's fate — every path in this simulation can still lead to recovery if it is followed by honest reassessment, corrective action, and continued attention to the stakeholders least addressed in the first response.",
    conceptExplanation: {
      what: "This capstone simulation integrates liquidity management, governance, stakeholder communication, and integrity under real time pressure and competing legitimate priorities.",
      why: "Real crises at this scale rarely have one stakeholder group whose interests can be addressed without any tradeoff against another group's interests.",
      how: "Effective crisis response typically requires sequencing priorities deliberately, communicating honestly about what is being prioritized and why, and following through with real action rather than messaging alone.",
      cost: "Every choice carries a real cost to at least one legitimate stakeholder group — this simulation does not offer a cost-free option.",
      risks: "Delayed or purely defensive responses in any direction tend to compound rather than resolve a crisis.",
      whoMayBenefit: "Organizations that build governance, transparency, and stakeholder trust before a crisis are generally better positioned to respond to one.",
      whoMayNotBenefit: "Organizations with weak governance or trust going into a crisis face a much harder path regardless of which first move they choose.",
      misunderstandingRisk: "Assuming there is one 'correct' first move rather than a genuine tradeoff between legitimate, competing stakeholder priorities.",
      verifyNote: "This is an educational simulation with fictional figures; real crisis management involves legal, financial, and communications professionals and does not follow a fixed script."
    },
    scoringDimensions: [
      { key: "evidence_use", label: "Evidence use", description: "Did the learner's reasoning draw on the facts presented rather than assumptions?" },
      { key: "liquidity_awareness", label: "Liquidity awareness", description: "Did the learner distinguish between cash, credit, and total asset value when making decisions?" },
      { key: "risk_management", label: "Risk management", description: "Did the learner identify and weigh the specific risks of each option rather than picking the most appealing narrative?" },
      { key: "integrity", label: "Integrity", description: "Did the learner's choices hold up to scrutiny rather than prioritizing appearance over substance?" },
      { key: "stakeholder_consideration", label: "Stakeholder consideration", description: "Did the learner explicitly weigh employees, investors, lenders, and community impact rather than only one group?" },
      { key: "long_term_thinking", label: "Long-term thinking", description: "Did the learner consider consequences beyond the immediate crisis moment?" },
      { key: "governance", label: "Governance", description: "Did the learner respect appropriate decision-making authority and process rather than acting unilaterally without justification?" },
      { key: "adaptability", label: "Adaptability", description: "Did the learner's reasoning acknowledge that the chosen path might need to change as new information emerged?" }
    ],
    realWorldExample:
      "This capstone deliberately uses no real company or individual — its fictional organization is designed purely to let the learner practice integrating every system introduced across all twenty quests.",
    closingReflection:
      "What did the learner protect, build, risk, or change—and did those choices match the life they originally envisioned?",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Why does this simulation avoid scoring success by money remaining alone?",
        type: "multiple_choice",
        options: [
          "Because money is irrelevant to organizational success",
          "Because real crisis leadership involves tradeoffs across liquidity, integrity, stakeholders, and governance that a single dollar figure cannot capture",
          "Because the simulation has no financial component",
          "Because scoring is not possible in a simulation"
        ],
        correctAnswer: "Because real crisis leadership involves tradeoffs across liquidity, integrity, stakeholders, and governance that a single dollar figure cannot capture",
        explanation: "Reducing complex leadership decisions to one financial number would miss most of what actually matters in a crisis."
      },
      {
        id: "kc2",
        question: "What is true of every choice offered in this capstone scenario?",
        type: "multiple_choice",
        options: [
          "One choice is a cost-free, obviously correct answer",
          "Every choice carries a real cost to at least one legitimate stakeholder group",
          "Only the financial choice matters",
          "The choices are unrelated to the rest of the course"
        ],
        correctAnswer: "Every choice carries a real cost to at least one legitimate stakeholder group",
        explanation: "The scenario is designed so that no single option is free of tradeoffs, reflecting real systemic complexity."
      }
    ],
    sourceIds: ["frb-scf"],
    achievementId: "boardroom-systems-strategist",
    unlocks: null,
    capstone: true,
    accessibilitySummary: "Four-choice scenario and scoring rubric presented entirely as readable text; no color-only or chart-only meaning.",
    reviewedDate: "2026-07-10"
  }
];
