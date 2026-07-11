# Curriculum Map

Every episode and quest below links its topic to its primary sources. IDs match `data/foundations-story.js`
and `data/wealth-quests.js`. See `data/source-registry.js` for full source details.

## Financial Foundations Story

| ID | Act | Title | Primary sources |
|----|-----|-------|------------------|
| ep01 | I | Your Future, Your Values | cfpb-your-money-your-goals |
| ep02 | I | Where Money Lives | cfpb-bank-accounts, fdic-deposit-insurance, ncua-share-insurance |
| ep03 | I | Your First Paycheck | irs-form-w2, irs-form-w4 |
| ep04 | I | Give Every Dollar a Job | cfpb-your-money-your-goals, fdic-money-smart |
| ep05 | I | Credit Is a Contract, Not Free Money | cfpb-credit-reports-scores, cfpb-debt-collection |
| ep06 | II | When Life Interrupts the Plan | fdic-money-smart, cfpb-your-money-your-goals |
| ep07 | II | The Real Cost of Getting Around | cfpb-your-money-your-goals |
| ep08 | II | Education, Career, and Return on Investment | studentaid-repayment, bls-ooh |
| ep09 | II | Taxes, Filing, and Records | irs-filing, irs-form-w2 |
| ep10 | II | Benefits Are Part of Compensation | irs-retirement-plans |
| ep11 | III | What You Own and What You Owe | frb-scf |
| ep12 | III | Cash Tools—Savings, CDs, and Treasury Bills | treasurydirect-tbills, sec-investing-basics |
| ep13 | III | Stocks, Bonds, and Diversified Funds | sec-stocks, sec-investing-basics |
| ep14 | III | Starting Something—Sole Proprietorship, LLC, or Corporation | irs-llc, sba-choose-structure, tx-sos-business-structure |
| ep15 | III | Keep Business and Personal Money Separate | sba-business-bank-account |
| ep16 | IV | Rent, Buy, Share, or Stay Flexible | cfpb-your-money-your-goals |
| ep17 | IV | Protect the Plan | fdic-money-smart |
| ep18 | IV | Money With Other People | cfpb-your-money-your-goals |
| ep19 | IV | Track Wealth Without Letting It Define You | frb-scf |
| ep20 | IV | Road to $1.5 Million—Build, Stress-Test, Revise | sec-compound-interest-calc, frb-scf |

## Future Wealth Quest

| ID | Tier | Title | Primary sources |
|----|------|-------|------------------|
| q01 | I | A Million Dollars Is a Balance Sheet, Not a Pile of Cash | frb-scf |
| q02 | I | High Income Versus Durable Wealth | frb-scf |
| q03 | I | Athlete, Entertainer, and Creator Income Shock | bls-ooh |
| q04 | I | Business Equity and Scale | sba-choose-structure |
| q05 | I | Build the Team, Keep the Judgment | sec-working-with-professional, finra-brokercheck, sec-adviser-info |
| q06 | II | Private Banking—Service, Credit, and Fees | fdic-deposit-insurance, sipc-protection |
| q07 | II | An Investment Policy Is a Decision System | sec-investing-basics |
| q08 | II | Private Investments and Illiquidity | sec-investing-basics |
| q09 | II | Tax Complexity and Entity Discipline | irs-filing |
| q10 | II | Estate, Trust, Beneficiary, and Giving Basics | irs-estate-gift-tax |
| q11 | III | Family Office or Outsourced Experts | sec-working-with-professional |
| q12 | III | Governance Prevents Expensive Confusion | sec-investing-basics |
| q13 | III | Concentrated Stock and Liquidity | sec-stocks |
| q14 | III | Borrowing Against Assets | fdic-deposit-insurance |
| q15 | III | Visibility, Security, Reputation, and Responsibility | fdic-bankfind |
| q16 | IV | Billionaire Wealth Is Usually Ownership, Not Cash | frb-scf |
| q17 | IV | Valuation, Control, and Market Risk | sec-stocks |
| q18 | IV | Regulation, Tax, Labor, and Public Scrutiny | irs-filing |
| q19 | IV | Philanthropy, Foundations, and Power | irs-estate-gift-tax |
| q20 | IV | The Multi-Billion-Dollar Boardroom | frb-scf |

Full source-per-episode mapping is available programmatically via each episode/quest object's `sourceIds` field.

## Visualizations

Every episode and quest above has exactly one structured visualization in `data/visualizations.js`
(`EPISODE_VISUALIZATIONS` / `QUEST_VISUALIZATIONS`), rendered by the shared `assets/visualization-engine.js`.
See `docs/VISUALIZATION_SYSTEM.md` for the rendering model and the full topic-by-topic list.
