You are building and deploying a complete open-source financial-literacy learning experience in this repository:

TARGET REPOSITORY — WRITE AND PUSH ONLY HERE:
https://github.com/BREXAtlas/Financial-Literacy-Course

READ-ONLY DESIGN REFERENCE:
https://github.com/BREXAtlas/Digital-Literacy-Course-

The reference repository name ends with a trailing hyphen. It is a separate project. Do not modify it, push to it, reuse its Supabase project, or accidentally change its GitHub Pages configuration.

The target Financial-Literacy-Course repository is currently empty. Build the new project from scratch while adapting the visual shell, accessibility patterns, course-engine ideas, guest mode, optional account synchronization, and GitHub Pages deployment approach from the Digital-Literacy-Course- repository.

Do not merely write a proposal or outline. Build the working application, curriculum data, documentation, tests, GitHub Pages workflow, and source system. Test it, commit it, and push it to the target repository.

Do not stop after creating a landing page.

# 1. Repository safety check

Before changing anything:

1. Run:
   - pwd
   - git remote -v
   - git status
   - git branch --show-current

2. Confirm that the writable remote is exactly:
   https://github.com/BREXAtlas/Financial-Literacy-Course

3. If the writable remote points to Digital-Literacy-Course- or any other repository, stop instead of writing files.

4. Treat Digital-Literacy-Course- as read-only reference material.

5. Do not use the Supabase URL, key, database, migrations, or authentication project from Digital-Literacy-Course-. Financial-Literacy-Course must have separate configuration instructions for a future, distinct Supabase project.

# 2. Product name and purpose

Build:

RAM READY FINANCIAL FUTURES

Subtitle:

Learn how money systems work—from a first paycheck to complex wealth—without promises, pressure, product sales, or get-rich-quick claims.

The experience has two connected paths using the same technical shell:

1. Financial Foundations Story
   A continuous personalized storyline that teaches financial life from a first-year college starting point through stability, investing, business decisions, and an illustrative “Road to $1.5 Million” planning simulation.

2. Future Wealth Quest
   Twenty advanced, game-like quests examining how wealth may be owned, managed, protected, financed, measured, transferred, and governed from approximately $1 million through multi-billion-dollar systems.

The course must clearly state:

- It is introductory financial education, not individualized financial, legal, accounting, investment, insurance, or tax advice.
- It does not promise that anyone will become wealthy.
- Not everyone wants to become wealthy, and wealth is not a measure of a person’s worth.
- Income, wealth, opportunity, health, disability, caregiving, discrimination, geography, luck, economic conditions, and family responsibilities affect financial outcomes.
- Students should verify current laws, limits, rates, taxes, eligibility rules, and product terms with authoritative sources and qualified professionals.
- The course has no affiliate links, product placement, investment recommendations, or sponsored financial products.
- Do not collect bank credentials, account numbers, Social Security numbers, tax documents, or other sensitive financial identifiers.

# 3. Initial audience and Angelo State design direction

The initial audience is first-year Angelo State University students, but the course must remain openly accessible to the public.

Use the same general visual direction as Ram Ready Digital Literacy:

- ASU-inspired blue: #245397
- ASU-inspired gold: #F0C33B
- Strong white space
- Clear typography
- Mobile-first responsive layout
- Accessible contrast
- Friendly university orientation language
- Themes of Ram Fam, belonging, support, growth, integrity, community, commitment, significance, and inclusion

Use these official Angelo State references:

- Core Values:
  https://www.angelo.edu/about-asu/core-values/

- Blue and Gold:
  https://www.angelo.edu/about-asu/traditions/blue-and-gold.php

- Roscoe and Bella:
  https://www.angelo.edu/about-asu/traditions/roscoe-and-bella.php

Branding safeguards:

- State prominently that this is an independent open-source pilot intended for review and possible future coordination.
- Do not represent it as an official Angelo State course, policy, credential, website, or financial-aid resource.
- Do not use an official university seal, logo, photograph, or copyrighted mascot artwork.
- Roscoe and Bella may appear as text-based guide characters using original interface treatment, as in the reference course.
- Their dialogue must be original and must not be represented as official university speech.
- Roscoe can provide energetic, practical challenges.
- Bella can provide thoughtful, evidence-focused, integrity-centered guidance.
- Avoid caricatures or gender stereotypes.

# 4. Core educational philosophy

Teach how financial systems work rather than teaching one supposedly correct way to live.

Every substantial topic must present:

1. What the concept is.
2. Why it exists.
3. How it may help.
4. What it may cost.
5. What risks or limitations exist.
6. Who may benefit.
7. Who may not benefit.
8. What can happen when it is misunderstood.
9. What current facts must be verified.
10. Links to authoritative sources.

Avoid biased or oversimplified language such as:

- “All debt is bad.”
- “Real estate is always the best investment.”
- “Renting is throwing money away.”
- “An LLC automatically protects everything.”
- “Stocks always go up.”
- “Bonds are always safe.”
- “Entrepreneurship is the only path to wealth.”
- “A college degree always pays off.”
- “People are poor because they do not budget.”
- “Millionaires all follow the same formula.”
- “Borrowing against assets is free money.”
- “Private banking makes money risk-free.”

Compare multiple legitimate approaches, including:

- Debt avalanche and debt snowball
- Renting, buying, living with family, and remaining flexible
- W-2 employment, hourly work, contract work, entrepreneurship, and mixed-income careers
- Banks and credit unions
- Checking, savings, certificates of deposit, and Treasury bills
- Stocks, bonds, diversified funds, cash, real estate, and business ownership
- Paying debt faster versus preserving emergency liquidity
- DIY investing versus working with financial professionals
- Sole proprietorships, LLCs, partnerships, and corporations
- High income versus high net worth
- Liquidity versus long-term growth
- Concentrated ownership versus diversification
- Giving now versus planned philanthropy
- Personal values beyond financial accumulation

Every comparison must show tradeoffs rather than declare a universal winner.

# 5. Personalization approach

The course should feel personalized, but the full curriculum must not be generated from scratch.

Use bounded personalization:

- Prewrite and source all financial instruction.
- Prewrite the main narrative, choices, consequences, quizzes, explanations, and source mappings.
- Assemble approved story fragments based on selected profile tags.
- Never permit an LLM to invent financial facts, tax rules, legal claims, investment returns, quiz answers, dollar consequences, or citations.
- A local open-source model may lightly personalize transitions and narrative phrasing only.
- The deterministic template engine must always be capable of rendering the complete course without an LLM.

The same underlying storyline must be used for the man and woman character choices.

Gender may change:

- Character presentation
- Name
- Pronouns
- Avatar styling

Gender must not change:

- Pay
- intelligence
- career opportunities
- expected financial behavior
- investment results
- quiz difficulty
- family responsibilities
- business potential
- consequences
- wealth outcomes

Build the pronoun system so another presentation option could be added later without rewriting the curriculum, but the initial visible character choices should be:

- Play as a man
- Play as a woman

# 6. Vision-casting onboarding

Create a step-by-step onboarding experience. Every question must include “Skip” or “Prefer not to answer.”

Do not require users to disclose real financial information.

Screen 1 — Your character

- Display name
- Play as a man
- Play as a woman
- Avatar style selected from original, non-photographic illustrations
- Allow the name to be changed later

Screen 2 — What matters to you

Allow multiple selections:

- Stability
- Flexibility
- Family
- Creativity
- Ownership
- Service
- Travel
- Privacy
- Community impact
- Generosity
- Comfortable lifestyle
- Luxury experiences
- Building something that lasts
- Still figuring it out

Screen 3 — Interests

Allow multiple selections:

- Basketball
- Football
- Other sports
- Fitness or martial arts
- Gaming and technology
- Research and science
- Business and entrepreneurship
- Music
- Film, photography, or visual arts
- Cooking and hospitality
- Education
- Healthcare
- Public service
- Skilled trades
- Nature and travel
- Community service
- Undecided

These selections must trigger prewritten story inserts.

Example:

Selecting basketball may add a basketball analogy, a campus-interest detail, and an optional later scenario involving variable athletic income. It must not automatically turn the learner into a professional athlete or imply that professional sports are a likely outcome.

Screen 4 — Possible career direction

- W-2 salaried career
- Hourly career
- Contract or gig work
- Business ownership
- Creative or athletic career
- Public service
- Mixed income
- Undecided

Screen 5 — Life vision

Selections may include:

- Rent for flexibility
- Own a home someday
- Multigenerational household
- Live in a city
- Live in a suburb
- Live in a rural community
- Travel frequently
- Marriage someday
- Long-term partnership
- Focus on being single
- Children someday
- No children
- Unsure
- Skip this section

Do not infer sexual orientation, religion, or traditional gender roles.

Screen 6 — Financial goal for the simulation

- Understand the basics
- Stop living paycheck to paycheck
- Build an emergency fund
- Become debt-free
- Buy a home
- Retire comfortably
- Build a business
- Reach a theoretical $1 million net worth
- Explore a theoretical $1.5 million path
- Understand how very wealthy households manage assets
- I do not have a number-based goal

Screen 7 — Starting simulation range

Use broad fictional ranges only:

Income:

- No current income
- Part-time income
- Entry-level full-time income
- Variable income
- Prefer a generic example

Savings:

- Starting at $0
- Less than $500
- $500–$2,000
- $2,000–$10,000
- Use a generic example

Debt:

- No debt
- Low balance
- Moderate balance
- High balance
- Student loans only
- Use a generic example

Explain that these selections create a fictional educational simulation and are not a financial assessment.

Screen 8 — Story preview and privacy

Show:

- Selected character
- Selected interests
- Selected goals
- Which story details will be adapted
- What will remain standard for everyone
- A statement that the course does not need exact account balances
- A button to edit selections
- A button to begin
- A button to begin with a completely generic story

# 7. Personalization node map

Use profile selections only at controlled story nodes.

Foundation personalization slots:

- Episode 1: name, values, broad life vision
- Episode 2: work model and banking needs
- Episode 3: career direction and first paycheck
- Episode 4: lifestyle and housing preferences
- Episode 6: family, support system, and emergency scenario
- Episode 7: location and transportation preference
- Episode 8: major, career, and education choices
- Episode 10: work type and benefits
- Episode 12: risk comfort and short-term goals
- Episode 14: entrepreneurship interest
- Episode 16: housing preference
- Episode 18: relationship and family vision
- Episode 20: selected financial goal and all relevant prior decisions

Wealth Quest personalization slots:

- Quest 2: high-income career or business interest
- Quest 3: sports, entertainment, art, or creator interest
- Quest 4: entrepreneurship
- Quest 6: privacy, service, or luxury preferences
- Quest 10: family and generosity preferences
- Quest 15: public visibility, privacy, security, and social impact
- Quest 19: generosity and community impact
- Quest 20: all selected values and goals

When no preference is selected, use a polished generic passage.

Do not insert every selected preference into every scene. The combinations should create a personalized impression without producing incoherent or repetitive text.

# 8. Story data model

Store curriculum in structured JavaScript data files rather than hard-coding all content into HTML.

Each foundation episode should have fields comparable to:

- id
- act
- title
- subtitle
- estimatedMinutes
- learningObjectives
- openingNarrative
- personalizationSlots
- approvedStoryFragments
- scenario
- choices
- immediateConsequences
- oneYearConsequences
- longTermConsequences
- recoveryPath
- conceptExplanation
- realWorldExample
- knowledgeChecks
- sourceIds
- achievementId
- unlocks
- accessibilitySummary
- reviewedDate

Each decision should include:

- choice text
- why someone might choose it
- possible benefit
- possible cost
- possible risk
- immediate simulated effect
- possible future effect
- “what could change this outcome”
- source IDs
- no moral judgment

Track educational simulation variables such as:

- cashOnHand
- monthlyCashFlow
- emergencyFundMonths
- debtBalance
- debtCost
- creditHealth
- taxReserve
- retirementAssets
- taxableInvestments
- businessAssets
- liquidAssets
- totalAssets
- totalLiabilities
- netWorth
- insuranceCoverage
- riskExposure
- financialKnowledge
- wellbeing
- integrity
- flexibility

Do not pretend these simplified variables are a full financial-planning model.

Never create an irreversible failure state. Every setback should have a recovery route and a lesson.

# 9. Financial Foundations Story — twenty episodes

This must be one continuous storyline rather than five disconnected chapters.

Organize it into four acts for navigation, but maintain a continuous life narrative.

ACT I — STARTING YOUR FINANCIAL LIFE

Episode 1: Your Future, Your Values

Teach:

- Financial literacy as decision-making, not just arithmetic
- Wants, needs, values, and tradeoffs
- Financial goals versus life goals
- Why wealth is not the only definition of success
- How future choices interact

Scenario:

The learner begins a first college semester and receives several competing opportunities requiring time and money.

Episode 2: Where Money Lives

Teach:

- Banks versus credit unions
- Checking versus savings
- Fees, minimum balances, overdrafts, holds, and access
- FDIC versus NCUA coverage at a general level
- Joint accounts
- Digital payment services
- Personal versus future business accounts
- How to verify that an institution is regulated or insured

Scenario:

The learner must choose where to deposit school, work, or family funds.

Episode 3: Your First Paycheck

Teach:

- Gross pay versus net pay
- W-2 employment
- Pay periods
- Form W-4
- Federal withholding
- Social Security and Medicare deductions
- Benefits deductions
- Why a tax refund is not automatically “free money”
- Difference between W-2 work and independent contracting

Include an interactive fictional pay stub.

Episode 4: Give Every Dollar a Job—Without Making One Budget Sacred

Teach:

- Cash flow
- Fixed, variable, periodic, and unexpected expenses
- Zero-based budgeting
- Percentage-based planning
- Pay-yourself-first systems
- Digital and paper tracking
- Why different methods work for different people

Scenario:

The learner balances housing, food, transportation, social activities, and savings.

Episode 5: Credit Is a Contract, Not Free Money

Teach:

- Credit reports
- Credit scores at a general level
- APR
- minimum payments
- utilization
- payment history
- total borrowing cost
- secured and unsecured debt
- installment and revolving debt
- cosigning
- consequences of missed payments
- fraud and identity theft basics

Include an amortization or payoff comparison.

ACT II — HANDLING REAL LIFE

Episode 6: When Life Interrupts the Plan

Teach:

- Emergency funds
- Liquidity
- insurance
- family support
- community resources
- responsible borrowing
- emergency expenses
- why some people cannot immediately save three to six months

Scenario:

A medical, transportation, housing, or family disruption occurs. Do not shame the learner.

Episode 7: The Real Cost of Getting Around

Teach:

- Purchase price versus total ownership cost
- interest
- insurance
- repairs
- fuel
- registration
- depreciation
- public transit
- ride services
- buying used versus new
- leasing
- living without a car

Episode 8: Education, Career, and Return on Investment

Teach:

- Tuition and fees
- scholarships and grants
- student loans
- repayment
- career earnings ranges
- career satisfaction
- geographic differences
- unpaid opportunities
- credentials
- apprenticeships
- uncertainty in labor markets

Use BLS information while avoiding guarantees.

Episode 9: Taxes, Filing, and Records

Teach:

- Why taxes exist
- income tax
- payroll tax
- sales tax
- property tax
- filing versus paying
- Form W-2
- Form 1099
- deductions versus credits
- record retention
- estimated taxes for self-employment
- why tax software output should still be reviewed
- when professional help may be appropriate

Do not hard-code current brackets or standard deduction amounts as permanent facts.

Episode 10: Benefits Are Part of Compensation

Teach:

- Salary versus total compensation
- health insurance
- retirement plans
- employer match
- paid leave
- disability coverage
- life insurance
- pension basics
- flexible spending and health savings accounts at an introductory level
- vesting
- tradeoffs between job offers

ACT III — BUILDING ASSETS AND OPTIONS

Episode 11: What You Own and What You Owe

Teach:

- Assets
- liabilities
- debt
- equity
- net worth
- cash flow versus net worth
- appreciating and depreciating assets
- why an asset can still create expenses
- why debt can sometimes support an asset but still increase risk

Include an interactive balance sheet.

Episode 12: Cash Tools—Savings, CDs, and Treasury Bills

Teach:

- Emergency cash
- savings accounts
- certificates of deposit
- liquidity
- maturity
- early withdrawal penalties
- interest-rate risk at an introductory level
- Treasury bills
- direct ownership versus funds
- inflation
- nominal versus real return

Do not call any instrument risk-free in every sense.

Episode 13: Stocks, Bonds, and Diversified Funds

Teach:

- What ownership in a company means
- what lending through a bond means
- market price
- dividends
- interest
- default risk
- volatility
- diversification
- mutual funds
- exchange-traded funds
- fees
- taxes
- time horizon
- risk tolerance
- past performance limitations

Do not recommend individual securities.

Episode 14: Starting Something—Sole Proprietorship, LLC, or Corporation

Teach:

- A business idea is not automatically a legal entity
- sole proprietorship
- partnership
- LLC
- corporation
- state registration
- EIN
- licenses
- contracts
- liability
- insurance
- accounting
- federal and state tax treatment
- why an LLC is not automatically a tax strategy
- why entity selection depends on circumstances

Provide Texas-specific source links but keep the main lesson broadly U.S.-focused.

Episode 15: Keep Business and Personal Money Separate

Teach:

- Personal versus business bank accounts
- bookkeeping
- business income and expenses
- receipts
- taxes
- owner draws and compensation at an introductory level
- cash reserves
- payroll
- internal controls
- commingling funds
- business credit
- fraud prevention
- why business revenue is not the same as personal spending money

Episode 16: Rent, Buy, Share, or Stay Flexible

Teach:

- Renting
- homeownership
- mortgages
- down payments
- closing costs
- repairs
- property tax
- insurance
- mobility
- roommates
- multigenerational living
- opportunity cost
- local market differences

Do not portray homeownership as mandatory.

Episode 17: Protect the Plan

Teach:

- Emergency preparation
- insurance as risk transfer
- health
- auto
- renters
- homeowners
- disability
- term life
- permanent life at a high-level neutral overview
- deductibles
- exclusions
- beneficiaries
- fraud and scams
- cybersecurity for financial accounts

Do not recommend a particular insurance product.

Episode 18: Money With Other People

Teach:

- Financial communication
- shared expenses
- joint versus separate accounts
- marriage
- partnership
- roommates
- caregiving
- children
- family obligations
- financial boundaries
- cosigning
- beneficiaries
- conflict and compromise

Do not assume that marriage, homeownership, or parenthood is a universal goal.

Episode 19: Track Wealth Without Letting It Define You

Teach:

- Net-worth tracking
- cash-flow tracking
- debt tracking
- retirement progress
- business equity
- financial-health measures
- privacy and account security
- comparison culture
- values-based review
- revising goals

Build a dashboard that tracks:

- cash buffer
- debt burden
- protection
- flexibility
- knowledge
- wellbeing
- net worth

Do not make net worth the only success meter.

Episode 20: Road to $1.5 Million—Build, Stress-Test, Revise

This is the foundations capstone.

Compare multiple hypothetical pathways:

- Entry-level salary with consistent saving
- Higher salary with lifestyle inflation
- Public-service career with benefits
- Skilled trade with business ownership
- Entrepreneurial path with higher risk
- Variable creative or athletic income
- A path interrupted by unemployment or caregiving
- A path prioritizing debt reduction
- A path that never reaches $1.5 million but still achieves stability and meaningful life goals

Use an interactive planning simulator.

The simulator must allow changes to illustrative assumptions such as:

- Starting balance
- Monthly contribution
- time
- assumed annual return
- fees
- inflation
- income growth
- savings rate
- debt interest
- interruptions

Display:

- Nominal dollars
- inflation-adjusted estimate
- total contributions
- estimated growth
- fees where applicable
- assumptions
- uncertainty warning

Never say “you will have.” Say:

“Under these selected assumptions, the model estimates…”

Explain that actual taxes, returns, job changes, emergencies, market losses, fees, and inflation can materially change results.

# 10. Future Wealth Quest — twenty quests

This is an optional, advanced educational path. It must not imply that everyone should pursue extreme wealth.

Present the wealth tiers as systems to understand, not a ladder of human value.

TIER I — APPROXIMATELY $1 MILLION TO $20 MILLION

Quest 1: A Million Dollars Is a Balance Sheet, Not a Pile of Cash

Teach:

- Net worth
- liquid versus illiquid assets
- retirement accounts
- home equity
- business equity
- taxes and debt
- why a “millionaire” may not have one million dollars available to spend

Quest 2: High Income Versus Durable Wealth

Teach:

- Salary
- bonuses
- equity compensation
- business ownership
- taxes
- lifestyle inflation
- saving rate
- concentration
- career risk

Quest 3: Athlete, Entertainer, and Creator Income Shock

Use fictional composite characters—not real celebrity gossip.

Teach:

- Short or uncertain earning windows
- irregular income
- contracts
- agent and management fees
- taxes
- injury or career interruption
- royalties
- image and licensing income
- lifestyle pressure
- family requests
- fraud
- retirement planning
- rebuilding after income falls

Include an athlete scenario, a performer or creator scenario, and a stable-career comparison.

Quest 4: Business Equity and Scale

Teach:

- Revenue versus profit
- cash flow
- equity
- valuation
- dilution
- partners
- debt
- reinvestment
- sale of a business
- concentration risk
- why a high business valuation is not the same as cash

Quest 5: Build the Team, Keep the Judgment

Teach the roles and limits of:

- CPA
- attorney
- financial planner
- investment adviser
- broker
- insurance professional
- banker
- bookkeeper
- business manager
- estate-planning professional

Teach:

- credentials
- fees
- conflicts
- fiduciary questions
- disciplinary-history checks
- second opinions
- why professionals do not remove personal responsibility

TIER II — APPROXIMATELY $20 MILLION TO $100 MILLION

Quest 6: Private Banking—Service, Credit, and Fees

Explain the difference between:

- A private bank
- Private-banking services
- Wealth management
- Brokerage
- Investment advisory services
- Custody

Teach:

- Lending
- cash management
- concierge services
- negotiated fees
- conflicts
- collateral
- deposit-insurance limits
- fraud risk
- why “private” does not mean unlimited safety or guaranteed returns

Quest 7: An Investment Policy Is a Decision System

Teach:

- Goals
- liquidity
- time horizon
- risk capacity
- asset allocation
- diversification
- rebalancing
- taxes
- fees
- governance
- documentation

Do not prescribe one allocation.

Quest 8: Private Investments and Illiquidity

Teach at an introductory level:

- Private businesses
- private equity
- venture capital
- private credit
- real estate partnerships
- limited partnerships
- lockups
- valuation uncertainty
- accredited-investor rules
- manager risk
- fraud
- lack of liquidity

Do not glamorize private investments.

Quest 9: Tax Complexity and Entity Discipline

Teach:

- Multiple income types
- entity records
- payroll
- estimated taxes
- state differences
- capital gains at a conceptual level
- charitable deductions at a conceptual level
- audits
- documentation
- legitimate planning versus evasion

Never teach hiding assets, falsifying expenses, evading taxes, or concealing beneficial ownership.

Quest 10: Estate, Trust, Beneficiary, and Giving Basics

Teach at a general level:

- Wills
- trusts
- beneficiaries
- powers of attorney
- probate
- guardianship
- life insurance
- estate tax
- gift tax
- charitable giving
- donor-advised funds
- private foundations
- professional legal advice

Do not state that every trust avoids taxes or that every life-insurance policy should be placed in a trust.

TIER III — APPROXIMATELY $100 MILLION TO $1 BILLION

Quest 11: Family Office or Outsourced Experts

Teach:

- Single-family office
- multifamily office
- outsourced services
- cost
- privacy
- internal controls
- governance
- cybersecurity
- fraud risk
- succession
- when complexity may or may not justify the structure

Quest 12: Governance Prevents Expensive Confusion

Teach:

- Boards
- approvals
- separation of duties
- audits
- spending authority
- investment committees
- written policies
- conflicts of interest
- family governance
- whistleblowing
- continuity

Quest 13: Concentrated Stock and Liquidity

Teach:

- Founder stock
- employer stock
- control
- lockups
- taxes
- volatility
- diversification
- hedging only as a high-level concept
- public disclosure
- selling pressure
- emotional attachment

Do not provide a personalized hedging strategy.

Quest 14: Borrowing Against Assets—Why It Exists and What Can Break

Explain neutrally:

- Securities-backed lending
- margin loans
- real-estate-secured lending
- business lines of credit
- interest expense
- collateral requirements
- variable rates
- loan-to-value
- margin calls
- forced sales
- concentrated-asset risk
- tax considerations
- lender discretion

Address the popular phrase “buy, borrow, die” as a shorthand, not a guaranteed or universally available strategy.

Explain:

- Borrowed money must still be repaid.
- Interest can compound.
- Collateral can fall in value.
- A lender can require more collateral or liquidation.
- Tax laws can change.
- Estate and basis rules are complex.
- The strategy may fail when cash flow, markets, rates, or family planning change.
- It should not be taught as a loophole or recommendation.

Quest 15: Visibility, Security, Reputation, and Responsibility

Teach:

- Personal security
- cybersecurity
- privacy
- public records
- reputation
- employees
- community impact
- charitable claims
- legal compliance
- media scrutiny
- responsibility attached to large organizations

TIER IV — $1 BILLION AND MULTI-BILLION-DOLLAR SYSTEMS

Quest 16: Billionaire Wealth Is Usually Ownership, Not Cash

Teach:

- Public-company equity
- private-company ownership
- voting control
- market value
- unrealized gains
- liquidity
- debt
- foundations
- trusts
- why reported net worth changes rapidly

Do not create a leaderboard of living billionaires.

Quest 17: Valuation, Control, and Market Risk

Teach:

- Market capitalization
- private valuation
- dilution
- voting and non-voting shares
- control premiums
- public offerings
- market declines
- liquidity events
- why valuation is not guaranteed cash

Quest 18: Regulation, Tax, Labor, and Public Scrutiny

Teach multiple perspectives on:

- Regulation
- tax policy
- labor
- competition
- antitrust
- public subsidies
- philanthropy
- political influence
- accountability

Present competing considerations without partisan advocacy.

Quest 19: Philanthropy, Foundations, and Power

Teach:

- Direct giving
- nonprofit grants
- donor-advised funds
- private foundations
- impact investing as a concept
- administrative costs
- tax rules
- transparency
- donor control
- community voice
- unintended consequences

Do not assume philanthropy automatically resolves harm or replaces public systems.

Quest 20: The Multi-Billion-Dollar Boardroom

Create a final systems simulation.

The learner manages a fictional organization with:

- concentrated ownership
- employees
- investors
- lenders
- taxes
- regulation
- community impact
- a foundation
- succession concerns
- market volatility
- a major crisis

Choices should include competing priorities rather than one obvious answer.

Score the learner on:

- evidence use
- liquidity awareness
- risk management
- integrity
- stakeholder consideration
- long-term thinking
- governance
- adaptability

Do not score only by how much money remains.

End with:

“What did the learner protect, build, risk, or change—and did those choices match the life they originally envisioned?”

# 11. Game mechanics

Create a financial-learning game, not a gambling game.

Use:

- Stars for completed learning actions
- Achievements
- Story milestones
- Act celebrations
- Quest celebrations
- Progress maps
- Optional streak tracking without punishment
- Replayable decisions
- “Try another path” mode
- Explanations after every response
- Recovery missions after setbacks
- Final certificates

Suggested three-star episode system:

1. Discover — complete the story and concept
2. Decide — complete the scenario
3. Explain — pass the knowledge check

Suggested achievements:

- Future Caster
- Bank Account Navigator
- Paycheck Decoder
- Cash Flow Builder
- Credit Contract Reader
- Emergency Route Planner
- Tax Translator
- Benefit Detective
- Balance Sheet Builder
- Risk Balancer
- Investor Vocabulary Builder
- Business Boundary Builder
- Wealth Tracker
- Long-Game Planner
- Private Banking Decoder
- Governance Guardian
- Liquidity Strategist
- Systems Wealth Analyst

Celebrations must reward learning, resilience, and evidence use—not only simulated net worth.

Do not use loot boxes, paid upgrades, wagering, random financial rewards, or casino-style mechanics.

# 12. Lesson interaction pattern

Each episode and quest should include:

1. Personalized narrative opening
2. “What is happening?” explanation
3. Real-world composite example
4. A decision
5. Immediate consequence
6. Possible one-year consequence
7. Possible long-term consequence
8. “What could change this outcome?”
9. Source drawer
10. Knowledge check
11. Explanation for every answer
12. Achievement or star update
13. Continue button
14. Replay or compare-another-path option

Use scenario types such as:

- Multiple choice
- Rank the tradeoffs
- Match a term to its meaning
- Identify missing information
- Compare total cost
- Read a pay stub
- Read a balance sheet
- Adjust a simulator
- Choose questions to ask a professional
- Detect a misleading claim
- Select evidence supporting a choice

Do not reduce financial literacy to memorizing vocabulary.

# 13. Calculators and simulations

Implement transparent educational calculators in JavaScript.

Include:

- Net-worth calculator
- Cash-flow calculator
- Debt payoff comparison
- APR and total-cost example
- Emergency-fund range
- Compound-growth calculator
- Inflation-adjusted value
- Fee impact
- Salary-versus-total-compensation comparison
- Road-to-$1.5-million scenario builder

Every result must display:

- Formula or explanation
- Inputs
- Assumptions
- Limitations
- Source links
- Date reviewed
- “Illustrative estimate, not a forecast”

Do not retrieve live stock prices, recommend securities, or claim to forecast returns.

Use user-controlled assumptions rather than presenting one return rate as guaranteed.

Include at least three comparison cases:

- Lower return / higher interruption
- Middle illustrative case
- Higher return / uninterrupted case

Do not label these “bad,” “expected,” and “good.” Use neutral names such as:

- Lower-growth illustration
- Middle illustration
- Higher-growth illustration

# 14. Open-source LLM requirement

No OpenAI, Anthropic, Gemini, or other proprietary LLM API may be used in the product.

Build an LLM provider abstraction with:

1. template
   - Default
   - Fully deterministic
   - Uses prewritten story fragments
   - Works on every supported device
   - Requires no model download

2. webllm
   - Optional enhanced personalization
   - Runs locally in a supported browser
   - Must require explicit learner consent before downloading model files
   - Must show approximate download size and device requirements
   - Must gracefully fall back to templates
   - Must never send the learner’s profile to a remote proprietary model

3. ollama
   - Developer or local-institution mode
   - Communicates only with a learner- or institution-controlled local endpoint
   - Disabled on the public GitHub Pages site unless deliberately configured

Use:

- WebLLM:
  https://github.com/mlc-ai/web-llm

- Ollama:
  https://github.com/ollama/ollama

Model rules:

- Select only a model with a clearly documented permissive open-source or open-weight license acceptable for this project.
- Prefer Apache-2.0 or similarly permissive licensing.
- Verify the model is currently compatible with the selected runtime before naming it in the interface.
- Document the model name, version, license, source, approximate download size, and review date in OPEN_SOURCE_AI.md.
- Do not commit model weights to GitHub.
- Do not load a model automatically.
- The application must remain complete when AI personalization is unavailable.

LLM boundaries:

The model may:

- Insert the learner’s first name
- Resolve pronouns
- Select approved transition language
- Join approved fragments more naturally
- Mention selected interests using preapproved language
- Produce a short recap using facts already supplied in the structured lesson data

The model may not:

- Generate financial advice
- Invent returns
- change calculator results
- change quiz answers
- change consequences
- introduce unsupported financial products
- provide tax or legal conclusions
- generate new citations
- infer sensitive traits
- shame the user
- modify the learning objectives
- introduce real-person financial claims

Validate any generated output. If validation fails, display the deterministic version.

# 15. Source and evidence system

Build a centralized source registry.

Each source needs:

- id
- title
- issuing organization
- URL
- topic
- concepts supported
- primary or secondary classification
- date last reviewed
- notes about changing information

Every episode and quest must reference source IDs.

Create:

- sources.html
- data/source-registry.js
- docs/SOURCE_POLICY.md
- docs/SOURCE_REVIEW_CHECKLIST.md

Add visible source chips or a “Sources for this lesson” drawer to every lesson and quest.

Open external links in a new tab with:

rel="noopener noreferrer"

Use authoritative and primary sources wherever practical.

Never copy large copyrighted passages. Summarize and link.

Facts that frequently change must be handled carefully, including:

- Tax rates
- tax brackets
- standard deductions
- retirement contribution limits
- estate and gift exclusions
- Treasury yields
- interest rates
- student-loan programs
- deposit-insurance rules
- securities regulations
- state filing fees
- business-tax rules

Do not hard-code changing amounts as timeless facts. When using a fictional amount:

- Label it “illustrative”
- Include the year or review date
- Keep it in a central assumptions file
- Link to the current official source

# 16. Initial authoritative source registry

At minimum, evaluate and use the following sources.

Angelo State identity:

https://www.angelo.edu/about-asu/core-values/
https://www.angelo.edu/about-asu/traditions/blue-and-gold.php
https://www.angelo.edu/about-asu/traditions/roscoe-and-bella.php

Bank accounts and consumer finance:

https://www.consumerfinance.gov/consumer-tools/bank-accounts/
https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/
https://www.consumerfinance.gov/consumer-tools/debt-collection/
https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/
https://www.fdic.gov/consumer-resource-center/money-smart-adults
https://www.fdic.gov/resources/deposit-insurance/
https://ncua.gov/support-services/share-insurance-fund

Taxes and employment:

https://www.irs.gov/filing
https://www.irs.gov/forms-pubs/about-form-w-2
https://www.irs.gov/forms-pubs/about-form-w-4
https://www.irs.gov/retirement-plans
https://www.irs.gov/businesses/small-businesses-self-employed/estate-and-gift-taxes

Business structures:

https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc
https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account
https://www.sos.state.tx.us/corp/businessstructure.shtml
https://comptroller.texas.gov/taxes/franchise/

Investing:

https://www.investor.gov/introduction-investing/investing-basics
https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks
https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator
https://www.treasurydirect.gov/marketable-securities/treasury-bills/

Education and careers:

https://studentaid.gov/manage-loans/repayment
https://www.bls.gov/ooh/

Wealth data and professional verification:

https://www.federalreserve.gov/econres/scfindex.htm
https://www.investor.gov/introduction-investing/getting-started/working-investment-professional
https://brokercheck.finra.org/
https://adviserinfo.sec.gov/
https://banks.data.fdic.gov/bankfind-suite/bankfind
https://www.sipc.org/for-investors/what-sipc-protects

Review every URL before deployment. Replace broken links with the current official equivalent while preserving the source’s purpose.

# 17. User interface and wireframe

Landing page:

Header:

- Ram Ready Financial Futures
- Home
- Financial Foundations
- Wealth Quest
- My Journey
- Achievements
- Sources
- Instructor Guide
- Account or guest indicator

Hero:

- Personalized greeting when a profile exists
- Course purpose
- Independent-pilot disclaimer
- Continue button
- Create your story button
- Explore generic version button

Two main path cards:

Card 1:

Financial Foundations Story
From a first paycheck to a long-term financial plan
20 episodes
Approximate completion time
Continue or begin

Card 2:

Future Wealth Quest
Understand wealth systems from $1 million through multi-billion-dollar ownership
20 quests
Advanced and optional
Continue or begin

Dashboard:

- Current story episode
- Current quest
- Stars earned
- Achievements
- Financial knowledge progress
- Scenario dashboard
- Resume button
- Edit vision button
- Reset simulation button
- Export progress button

Story map:

- Four acts
- Twenty connected nodes
- Completed, active, and locked states
- Accessible list alternative
- Scroll or anchor to the active episode
- Do not rely on color alone

Quest map:

- Four wealth-system tiers
- Five quests per tier
- Clearly state that tiers explain systems and are not rankings of people
- Allow advanced learners to preview quest descriptions
- Unlock based on learning progress rather than simulated money

Episode screen:

- Back to map
- Progress
- Guide character
- Personalized story
- Concept card
- Decision cards
- Consequence panel
- Source drawer
- Knowledge check
- Star celebration
- Continue

Profile screen:

- Edit name and selections
- Show what is stored
- Export profile and progress
- Delete local profile
- Delete cloud account data instructions
- Enable or disable local-model personalization
- Privacy explanation

# 18. Persistence and optional Supabase

Guest mode must be fully functional.

Guest data:

- Store locally using a namespaced localStorage structure such as:
  ramReadyFinancialFutures.v1
- Save profile selections
- Save story progress
- Save choices
- Save stars
- Save achievements
- Save calculator assumptions
- Save completion
- Provide export and import as JSON
- Provide complete reset

Optional account mode:

Adapt the architecture from Digital-Literacy-Course-, but create separate files and setup instructions.

Include:

- Passwordless email magic link
- Persistent session
- Guest-to-account merge
- Cross-device profile restoration
- Cross-device progress
- Manual sync
- Log out
- Row Level Security
- User-owned rows only
- Separate Financial Literacy Supabase project instructions

Do not put a real private service key in the repository.

A public publishable key may only be added through a clearly documented configuration file after the separate project exists and RLS is enabled.

Create a migration for tables comparable to:

- learner_profiles
- course_progress
- story_choices
- achievements
- completion_records

Store bounded profile tags and simulation ranges, not exact bank balances or sensitive account information.

The public site must work even when Supabase is not configured.

# 19. Technical implementation

Use the same lightweight static approach as the reference project.

Do not introduce React, Next.js, Vite, a server framework, or a required package manager unless a compelling repository-specific problem makes it necessary.

Prefer:

- HTML
- CSS
- modern browser JavaScript
- ES modules
- JSON-compatible structured data
- GitHub Pages
- optional Supabase loaded from a documented public CDN
- optional WebLLM loaded only when requested

Suggested structure:

index.html
foundations.html
wealth-quest.html
journey.html
achievements.html
profile.html
sources.html
instructor-guide.html
privacy.html
disclaimer.html
auth-callback.html

assets/
  styles.css
  print.css
  site.js
  profile-engine.js
  personalization-engine.js
  story-engine.js
  quest-engine.js
  game-engine.js
  calculator-engine.js
  source-renderer.js
  accessibility.js
  certificate.js
  auth-sync.js
  course-cloud-bridge.js
  supabase-config.example.js

data/
  onboarding-options.js
  source-registry.js
  foundations-story.js
  wealth-quests.js
  story-fragments.js
  achievements.js
  calculator-assumptions.js
  glossary.js

llm/
  llm-provider.js
  template-provider.js
  webllm-provider.js
  ollama-provider.js
  output-validator.js

supabase/
  migrations/
    create_financial_literacy_profiles_and_progress.sql

docs/
  CURRICULUM_MAP.md
  STORY_ARCHITECTURE.md
  PERSONALIZATION_MODEL.md
  OPEN_SOURCE_AI.md
  SOURCE_POLICY.md
  SOURCE_REVIEW_CHECKLIST.md
  INSTRUCTOR_PILOT_GUIDE.md
  ACCESSIBILITY.md
  PRIVACY_MODEL.md

scripts/
  validate-site.mjs

.github/
  workflows/
    pages.yml
  ISSUE_TEMPLATE/
    bug-report.yml
    curriculum-review.yml
    source-correction.yml
    accessibility-review.yml
    university-feedback.yml

README.md
QUICKSTART.md
CONTRIBUTING.md
CODE_OF_CONDUCT.md
ROADMAP.md
SUPABASE-SETUP.md
DEPLOYMENT.md
BRANDING-NOTICE.md
LICENSE.md

You may improve the structure, but keep curriculum data separate from rendering logic.

# 20. Accessibility

Meet WCAG-oriented accessibility practices.

Include:

- Semantic headings
- Skip links
- Keyboard navigation
- Visible focus states
- Screen-reader labels
- Accessible form errors
- Captions or transcripts for any media
- Reduced-motion support
- No required audio
- Optional read-aloud
- Sufficient color contrast
- No information communicated by color alone
- Responsive mobile layout
- Large touch targets
- Plain-language explanations
- Accessible alternatives to maps and visual dashboards
- Print-friendly lesson summaries
- No timed quizzes

Celebrations should respect reduced-motion preferences.

# 21. Privacy and safety

Do not collect or request:

- Social Security numbers
- Taxpayer identification numbers
- Bank login information
- Account numbers
- routing numbers
- exact investment holdings
- exact debt account numbers
- copies of tax forms
- credit-report login credentials
- exact home address

Use broad ranges and fictional scenarios.

Do not send personalization data to an external analytics service.

Do not add ad trackers.

Do not add affiliate links.

Sanitize the display name and any optional free text before rendering.

Do not use free text as executable HTML.

# 22. Real-world consequences

Every major topic must include realistic consequences.

Examples:

- An overdraft can trigger fees or rejected payments.
- A missed credit payment can lead to fees, collection, and credit-report consequences.
- Paying only a credit-card minimum can substantially increase total interest and payoff time.
- A larger emergency fund can improve flexibility but may delay another goal.
- A higher-return investment can involve larger losses and uncertainty.
- A long-term bond can lose market value when interest rates change.
- A Treasury bill may preserve short-term principal at maturity but still face inflation and reinvestment considerations.
- An LLC may provide legal separation in some circumstances but does not replace contracts, insurance, accounting, compliance, or professional advice.
- Mixing personal and business funds can create accounting, tax, governance, and legal problems.
- A high salary can coexist with low net worth.
- A high net worth can coexist with limited liquidity.
- Borrowing against an asset can avoid an immediate sale but adds interest, collateral, and forced-liquidation risk.
- A celebrity or athlete can earn a large amount for a short period and still face long-term financial instability.
- A stable salary and consistent benefits can produce meaningful long-term wealth without fame.
- A learner may choose lower financial accumulation in exchange for service, flexibility, family time, or another value.

Use “may,” “can,” and “could” where outcomes depend on circumstances.

# 23. Certificates

Create separate browser-generated PDF completion certificates for:

1. Financial Foundations Story
2. Future Wealth Quest
3. Full Ram Ready Financial Futures completion

Certificates should include:

- Learner display name
- Path completed
- Completion date
- Skills covered
- Independent open-source pilot notice
- Statement that it is not official university credit, a transcript credential, professional certification, or financial-adviser qualification

# 24. Instructor and pilot materials

Create an instructor guide covering:

- Course purpose
- Intended audience
- Learning outcomes
- Suggested first-year seminar use
- Orientation use
- business-school use
- student-success use
- library or financial-wellness workshop use
- facilitation questions
- accessibility
- source-review process
- limits of the simulation
- non-advice disclaimer
- how to report errors
- pilot-feedback questions
- how to discuss inequality and opportunity without shaming students
- how to distinguish education from product promotion

Include a curriculum map aligning every episode and quest with learning outcomes and sources.

# 25. README requirements

The README must explain:

- What Ram Ready Financial Futures is
- Its two learning paths
- Who it is for
- Its independent-pilot status
- The bounded personalization model
- Why core lessons are deterministic
- How optional open-source local LLM personalization works
- Why no proprietary model is used
- Source and neutrality policy
- Privacy model
- Guest mode
- Optional Supabase mode
- Local run instructions
- GitHub Pages deployment
- Repository structure
- Accessibility
- Contributing
- Licensing
- Public URL

Expected public URL:

https://brexatlas.github.io/Financial-Literacy-Course/

# 26. Licensing

Use:

- MIT License for original source code
- Creative Commons Attribution 4.0 International for original curriculum text
- A separate third-party notices section
- A separate open-source model-license section
- No claim of ownership over government sources or Angelo State marks
- No redistribution of third-party model weights

Document this clearly in LICENSE.md and BRANDING-NOTICE.md.

# 27. Validation

Create scripts/validate-site.mjs that checks:

- Required files exist
- Internal HTML links resolve
- Every episode has a unique ID
- Every quest has a unique ID
- Every source ID referenced by curriculum exists
- Every knowledge check has an answer and explanation
- Every story choice has consequence text
- Every episode has learning objectives
- Every external link uses secure HTTPS where available
- Every external target="_blank" link uses rel="noopener" or rel="noopener noreferrer"
- No prohibited proprietary LLM provider names appear in application configuration
- No real Supabase service-role key exists
- No official Angelo State logo file is bundled
- No empty placeholder lessons remain
- All twenty foundation episodes exist
- All twenty wealth quests exist

Also manually test:

- Mobile layout
- Desktop layout
- Keyboard navigation
- Generic story
- Man character path
- Woman character path
- Skipping every onboarding selection
- Basketball personalization
- Entrepreneurship personalization
- Marriage and family preference handling
- No-marriage and no-children preference handling
- Local progress persistence
- Reset
- Export/import
- Knowledge checks
- Stars and achievements
- Road-to-$1.5-million calculator
- Source drawers
- Reduced motion
- GitHub Pages base-path behavior

Use relative URLs that work under:

/Financial-Literacy-Course/

Do not assume the site is hosted at the domain root.

# 28. GitHub Pages deployment

Create a GitHub Actions workflow that deploys the static site to GitHub Pages after pushes to main and supports manual workflow dispatch.

Use currently supported official GitHub Pages actions.

Do not require a build framework.

Confirm that all assets load correctly from the repository subdirectory.

# 29. Git and completion process

After implementation:

1. Run the validator.
2. Start a local static server.
3. Test the main pages.
4. Review browser console errors.
5. Check git diff.
6. Confirm no credentials or private information were added.
7. Commit with a descriptive message.
8. Push to main in:
   BREXAtlas/Financial-Literacy-Course
9. Confirm the GitHub Actions workflow starts.
10. Report the commit SHA and public Pages URL.
11. List anything that still requires owner configuration, such as creating the separate Supabase project or enabling GitHub Pages permissions.

Do not claim that deployment succeeded unless the workflow actually succeeded.

# 30. Definition of done

The project is not complete unless all of the following are true:

- The landing page works.
- Vision-casting onboarding works.
- A generic path works.
- Man and woman character presentations work from the same story data.
- Selected interests appear through bounded, prewritten personalization.
- All twenty Financial Foundations episodes exist.
- All twenty Future Wealth quests exist.
- Every episode and quest contains interaction and source links.
- Stars, achievements, celebrations, and progress work.
- The simulation does not promote one wealth path as universally correct.
- The $1.5 million simulator clearly displays assumptions and uncertainty.
- Athlete, entertainer, millionaire, private-banking, billionaire, stock, bond, and Treasury-bill concepts are included.
- Business and personal banking are distinguished.
- LLC, W-2, taxes, assets, liabilities, salary, and wealth tracking are taught.
- The course contains strong non-advice language.
- The deterministic story works without an LLM.
- Any LLM integration is open-source/local and optional.
- Guest data persists locally.
- Use this Supabase setup documentation  https://didwxihufueqbpfnfdmm.supabase.co
- Accessibility checks are addressed.
- Sources are centralized and visible.
- Documentation is complete.
- Validation passes.
- The site is committed and pushed to the correct repository.
- GitHub Pages deployment is configured.

Proceed autonomously. Make reasonable design decisions consistent with this specification. Do not pause after each file to ask for approval. Do not replace completed curriculum with placeholders such as “content coming soon.”