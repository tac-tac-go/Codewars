function loseOrEarn(costPrice, sellPrice, fakeMoney, paidBack) {
  const profit = sellPrice - fakeMoney - costPrice;
  return profit < 0 ? `Lost $${-profit}` : `Earned $${profit}`
}
