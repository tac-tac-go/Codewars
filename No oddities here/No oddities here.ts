export function noOdds(values: number[]): number[] {
  return values.filter(v => v%2==0)
}
