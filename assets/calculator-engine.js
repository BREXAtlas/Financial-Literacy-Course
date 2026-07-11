// Ram Ready Financial Futures — Transparent Educational Calculators
//
// Every result returns its formula, inputs, assumptions, limitations, and
// an "illustrative estimate, not a forecast" flag. No live market data is
// fetched and no security is recommended. See data/calculator-assumptions.js.

import { ILLUSTRATIVE_NOTE, GROWTH_ILLUSTRATIONS, CALCULATOR_META } from "../data/calculator-assumptions.js";

function wrap(id, inputs, result, limitations) {
  return {
    ...CALCULATOR_META[id],
    inputs,
    result,
    limitations,
    illustrativeNote: ILLUSTRATIVE_NOTE,
    reviewedDate: CALCULATOR_META[id].reviewedDate || "2026-07-10"
  };
}

export function netWorth({ assets = [], liabilities = [] }) {
  const totalAssets = assets.reduce((s, a) => s + Number(a.value || 0), 0);
  const totalLiabilities = liabilities.reduce((s, l) => s + Number(l.value || 0), 0);
  return wrap("netWorth", { assets, liabilities }, {
    totalAssets, totalLiabilities, netWorth: totalAssets - totalLiabilities
  }, "Does not include taxes owed on sale of appreciated assets or valuation uncertainty for illiquid items.");
}

export function cashFlow({ monthlyIncome = 0, fixedExpenses = 0, variableExpenses = 0, periodicAnnualExpenses = 0, debtPayments = 0 }) {
  const monthlyCashFlow = monthlyIncome - (fixedExpenses + variableExpenses + periodicAnnualExpenses / 12 + debtPayments);
  return wrap("cashFlow", { monthlyIncome, fixedExpenses, variableExpenses, periodicAnnualExpenses, debtPayments }, {
    monthlyCashFlow
  }, "A single-month snapshot; irregular income or expenses can shift this significantly month to month.");
}

export function debtPayoffComparison({ balance, aprPct, monthlyPayments = [] }) {
  const scenarios = monthlyPayments.map((payment) => {
    let remaining = balance;
    let totalInterest = 0;
    let months = 0;
    const monthlyRate = aprPct / 100 / 12;
    while (remaining > 0 && months < 600) {
      const interest = remaining * monthlyRate;
      const principalPaid = Math.min(remaining, Math.max(0, payment - interest));
      if (principalPaid <= 0) { months = 600; break; }
      remaining = remaining - principalPaid;
      totalInterest += interest;
      months += 1;
    }
    return { payment, months, totalInterest: Math.round(totalInterest), totalPaid: Math.round(balance + totalInterest) };
  });
  return wrap("debtPayoff", { balance, aprPct, monthlyPayments }, { scenarios },
    "Assumes a fixed rate and no new charges; real cards and loans may have variable rates, fees, or promotional terms.");
}

export function aprTotalCost({ principal, aprPct, months }) {
  const monthlyRate = aprPct / 100 / 12;
  const payment = monthlyRate === 0
    ? principal / months
    : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const totalPaid = payment * months;
  return wrap("aprTotalCost", { principal, aprPct, months }, {
    monthlyPayment: Math.round(payment * 100) / 100,
    totalPaid: Math.round(totalPaid),
    totalInterest: Math.round(totalPaid - principal)
  }, "Illustrative fixed-rate example; actual loans may include fees not shown here.");
}

export function emergencyFundRange({ essentialMonthlyExpenses }) {
  return wrap("emergencyFund", { essentialMonthlyExpenses }, {
    lowEnd: Math.round(essentialMonthlyExpenses * 3),
    highEnd: Math.round(essentialMonthlyExpenses * 6)
  }, "A general planning range, not a requirement — some households cannot immediately reach this range, and that does not mean failure.");
}

export function compoundGrowth({ startingBalance = 0, monthlyContribution = 0, years, annualReturnPct, feesPct = 0 }) {
  const months = years * 12;
  const netMonthlyRate = (annualReturnPct - feesPct) / 100 / 12;
  let balance = startingBalance;
  let totalContributions = startingBalance;
  for (let m = 0; m < months; m++) {
    balance = balance * (1 + netMonthlyRate) + monthlyContribution;
    totalContributions += monthlyContribution;
  }
  return wrap("compoundGrowth", { startingBalance, monthlyContribution, years, annualReturnPct, feesPct }, {
    endingBalance: Math.round(balance),
    totalContributions: Math.round(totalContributions),
    estimatedGrowth: Math.round(balance - totalContributions)
  }, "Assumes a constant return and constant contribution; real markets and incomes fluctuate.");
}

export function inflationAdjustedValue({ nominalValue, inflationPct, years }) {
  const real = nominalValue / Math.pow(1 + inflationPct / 100, years);
  return wrap("inflationAdjusted", { nominalValue, inflationPct, years }, {
    realValue: Math.round(real)
  }, "Assumes a constant inflation rate over the full period, which real inflation rarely is.");
}

export function feeImpact({ startingBalance = 0, monthlyContribution = 0, years, annualReturnPct, feeScenariosPct = [0, 0.5, 1] }) {
  const scenarios = feeScenariosPct.map((feesPct) => {
    const { result } = { result: compoundGrowth({ startingBalance, monthlyContribution, years, annualReturnPct, feesPct }).result };
    return { feesPct, endingBalance: result.endingBalance };
  });
  return wrap("feeImpact", { startingBalance, monthlyContribution, years, annualReturnPct, feeScenariosPct }, { scenarios },
    "Small fee differences compound significantly over long horizons; actual fund fees vary by product.");
}

export function salaryVsTotalComp({ salary, retirementMatchAnnual = 0, insuranceValueAnnual = 0, paidLeaveDaysValue = 0 }) {
  const totalComp = salary + retirementMatchAnnual + insuranceValueAnnual + paidLeaveDaysValue;
  return wrap("salaryVsTotalComp", { salary, retirementMatchAnnual, insuranceValueAnnual, paidLeaveDaysValue }, {
    totalComp
  }, "Benefit values are illustrative estimates; actual value depends on personal use and plan design.");
}

export function bankFeeAnnualCost({ monthlyMaintenanceFee = 0, overdraftFee = 0, expectedOverdraftsPerYear = 0, otherAnnualFees = 0 }) {
  const annualCost = monthlyMaintenanceFee * 12 + overdraftFee * expectedOverdraftsPerYear + otherAnnualFees;
  return wrap("bankFeeAnnualCost", { monthlyMaintenanceFee, overdraftFee, expectedOverdraftsPerYear, otherAnnualFees }, {
    annualCost
  }, "Assumes fees stay constant all year; many fees can be reduced or waived through direct deposit or minimum-balance requirements.");
}

export function transportationTotalCost({ loanOrLeasePayment = 0, insurance = 0, fuelOrFares = 0, maintenance = 0 }) {
  const monthlyTotal = loanOrLeasePayment + insurance + fuelOrFares + maintenance;
  return wrap("transportationTotalCost", { loanOrLeasePayment, insurance, fuelOrFares, maintenance }, {
    monthlyTotal, annualTotal: Math.round(monthlyTotal * 12)
  }, "Averages maintenance and fuel costs across the year; actual monthly costs vary and large repairs are lumpy, not smooth.");
}

export function debtAvalancheSnowball({ debts = [], extraMonthlyPayment = 0 }) {
  function simulate(order) {
    let remaining = order.map((d) => ({ ...d }));
    let months = 0;
    let totalInterest = 0;
    while (remaining.some((d) => d.balance > 0) && months < 600) {
      months += 1;
      let extra = extraMonthlyPayment;
      for (const d of remaining) {
        if (d.balance <= 0) continue;
        const interest = d.balance * (d.aprPct / 100 / 12);
        totalInterest += interest;
        d.balance += interest;
        const payment = Math.min(d.balance, d.minPayment);
        d.balance -= payment;
      }
      for (const d of remaining) {
        if (extra <= 0) break;
        if (d.balance <= 0) continue;
        const payment = Math.min(d.balance, extra);
        d.balance -= payment;
        extra -= payment;
      }
    }
    return { months, totalInterest: Math.round(totalInterest) };
  }

  const avalancheOrder = [...debts].sort((a, b) => b.aprPct - a.aprPct);
  const snowballOrder = [...debts].sort((a, b) => a.balance - b.balance);
  const avalanche = simulate(avalancheOrder);
  const snowball = simulate(snowballOrder);

  return wrap("debtAvalancheSnowball", { debts, extraMonthlyPayment }, {
    avalanche, snowball
  }, "Assumes fixed APRs and consistent extra payment every month; a missed payment or new charge changes the real result.");
}

export function marginCallStressTest({ portfolioValue, loanAmount, maintenanceThresholdPct = 30, marketDropPct }) {
  const stressedValue = portfolioValue * (1 - marketDropPct / 100);
  const loanToValuePct = Math.round((loanAmount / stressedValue) * 1000) / 10;
  const maintenanceEquityRequired = stressedValue * (maintenanceThresholdPct / 100);
  const equity = stressedValue - loanAmount;
  const marginCall = equity < maintenanceEquityRequired;
  const shortfall = marginCall ? Math.round(maintenanceEquityRequired - equity) : 0;
  return wrap("marginCallStressTest", { portfolioValue, loanAmount, maintenanceThresholdPct, marketDropPct }, {
    stressedValue: Math.round(stressedValue), loanToValuePct, equity: Math.round(equity), marginCall, shortfall
  }, "A simplified single-shock model; real lender maintenance requirements, margin rates, and timing vary by broker and asset type.");
}

export function roadTo1_5Million(assumptions) {
  const cases = Object.values(GROWTH_ILLUSTRATIONS).map((illustration) => {
    const growth = compoundGrowth({
      startingBalance: assumptions.startingBalance,
      monthlyContribution: assumptions.monthlyContribution,
      years: assumptions.years,
      annualReturnPct: illustration.annualReturnPct,
      feesPct: assumptions.feesPct
    });
    const inflationAdjusted = inflationAdjustedValue({
      nominalValue: growth.result.endingBalance,
      inflationPct: assumptions.inflationPct,
      years: assumptions.years
    });
    return {
      id: illustration.id,
      label: illustration.label,
      description: illustration.description,
      nominalEndingBalance: growth.result.endingBalance,
      inflationAdjustedEndingBalance: inflationAdjusted.result.realValue,
      totalContributions: growth.result.totalContributions,
      estimatedGrowth: growth.result.estimatedGrowth
    };
  });
  return wrap("roadTo1_5Million", assumptions, { cases },
    "Never states 'you will have' a result — only what the model estimates under the selected assumptions. Actual taxes, returns, job changes, emergencies, market losses, fees, and inflation can materially change results.");
}
