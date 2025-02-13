export function countBy(x: number, n: number): number[] {
  return Array.from({length:n},(_,i) => x + x*i)
}
