function profitLoss(records) {
  const totalProfitOrLoss = records.reduce((total, [price, percent]) => {
    const cost = price / (1 + percent / 100);
    return total + (price - cost);
  }, 0);
  return Math.round(totalProfitOrLoss * 100) / 100;
}
