export function sumCubes(n: number): number {
  return [...Array(n).keys()].map(i => (i+1)**3).reduce((a,b) => a+b,0)
}
