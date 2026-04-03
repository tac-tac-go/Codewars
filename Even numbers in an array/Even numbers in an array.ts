export function evenNumbers(array: number[], n: number): number[] {
  return array.filter(v=>v%2==0).slice(-n)
}
