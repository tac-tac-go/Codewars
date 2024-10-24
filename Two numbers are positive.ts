export function twoArePositive(a: number, b: number, c: number): boolean {
  return [a,b,c].filter(v => v>0).length === 2
}
