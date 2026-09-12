export function height(n: number): string {
  const h: number = 2000000;
  const r: number = 2.5;
  let total: number = 0;
  for (let i: number = 0; i <= n; i++) {
    total += h / Math.pow(r, i);
  }
  return total.toFixed(3);
}
