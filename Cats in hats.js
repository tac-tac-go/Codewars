function height(n) {
  let h = 2000000;
  let r = 2.5;
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += h / Math.pow(r, i);
  }
  return total.toFixed(3);
}
