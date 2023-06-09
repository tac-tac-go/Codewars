export function nthEven(n: number): number {
  return [...Array(n).keys()].map(v => v*2)[n-1]
}
