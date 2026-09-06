export function multiples(m: number, n: number): number[] {
  return [...Array(m).keys()].map(v => n*(v+1))
}

