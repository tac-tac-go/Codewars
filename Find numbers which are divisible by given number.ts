export function divisibleBy(numbers: number[], divisor: number): number[]{
  return numbers.filter(v => v%divisor==0)
}
