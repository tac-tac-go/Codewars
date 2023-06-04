export function between(a: number, b: number): number[] {
  return [...Array(Math.abs(b-a+1)).keys()].map(v => v+a);
}
