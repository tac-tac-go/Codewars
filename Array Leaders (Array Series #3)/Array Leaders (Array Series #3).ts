export function arrayLeaders(numbers: number[]): number[] {
  return numbers.filter((e,i) => e>numbers.slice(i+1,).reduce((a,b) => a+b,0))
}

