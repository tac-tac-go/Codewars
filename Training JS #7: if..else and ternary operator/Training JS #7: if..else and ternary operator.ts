export function saleHotdogs(n: number): number {
  return n<5 ? 100*n : n>=5 && n < 10 ? 95*n : 90*n;
}
