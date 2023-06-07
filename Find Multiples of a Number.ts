export function findMultiples(integer: number, limit: number): number[] {
  return [...Array(limit-integer+1).keys()].map(v => v+integer).filter(v => v%integer==0)
}
