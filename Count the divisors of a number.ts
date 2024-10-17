export function divisors(n: number) {
  return [...Array(n).keys()].map(i => i+1).filter(v => n%v==0).length
}
