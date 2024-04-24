export function solve(s: string): number {
  return Math.max.apply(null,s.match(/[0-9]+/g)!.map(i => Number(i)))
}
