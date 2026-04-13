function cheapestQuote(newspapers) {
  const rates = [
    { count: 40, price: 3.85 },
    { count: 20, price: 1.93 },
    { count: 10, price: 0.97 },
    { count: 5, price: 0.49 },
    { count: 1, price: 0.10 }
  ];

  let totalCost = 0;
  let remaining = newspapers;
  for (const rate of rates) {
    if (remaining >= rate.count) {
      const numSets = Math.floor(remaining / rate.count);
      totalCost += numSets * rate.price;
      remaining %= rate.count;
    }
  }
  return Number(totalCost.toFixed(2));
}
