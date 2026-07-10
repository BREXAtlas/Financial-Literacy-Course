// Ram Ready Financial Futures — Glossary
// Plain-language definitions used by the source drawer and lesson pages.
// Not exhaustive — expanded over time; see docs/SOURCE_REVIEW_CHECKLIST.md.

export const GLOSSARY = [
  { term: "Net worth", definition: "Everything you own (assets) minus everything you owe (liabilities)." },
  { term: "Gross pay", definition: "Total pay before taxes and other deductions are taken out." },
  { term: "Net pay", definition: "The amount actually deposited after taxes and deductions." },
  { term: "APR", definition: "Annual percentage rate — the yearly cost of borrowing, including certain fees, expressed as a percentage." },
  { term: "Liquidity", definition: "How quickly an asset can be turned into cash without a significant loss of value." },
  { term: "Diversification", definition: "Spreading money across different investments so no single loss can wipe out the whole portfolio." },
  { term: "FDIC insurance", definition: "Federal deposit insurance that protects certain bank deposits up to a legal limit if the bank fails." },
  { term: "NCUA insurance", definition: "Federal share insurance that protects certain credit union deposits up to a legal limit." },
  { term: "Equity", definition: "An ownership stake — in a company, a business, or a home minus what is still owed on it." },
  { term: "Amortization", definition: "The schedule by which a loan balance is paid down over time through regular payments." },
  { term: "Fiduciary", definition: "A legal or professional duty to act in a client's best interest, subject to specific rules and exceptions." },
  { term: "Illiquid asset", definition: "An asset that cannot be quickly or easily converted to cash without a delay or discount." },
  { term: "Vesting", definition: "The schedule by which an employee earns full ownership of an employer contribution or equity grant." },
  { term: "Margin call", definition: "A lender's demand for more collateral or repayment when a loan's collateral value falls too low." },
  { term: "Donor-advised fund", definition: "A charitable giving account that lets a donor recommend how and when funds are granted to nonprofits." }
];

export function findGlossaryTerm(term) {
  return GLOSSARY.find((g) => g.term.toLowerCase() === term.toLowerCase()) || null;
}
