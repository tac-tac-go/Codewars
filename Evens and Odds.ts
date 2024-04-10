export function evensAndOdds(num: number): string {
  return num%2==0 ? num.toString(2) : num.toString(16)
}
