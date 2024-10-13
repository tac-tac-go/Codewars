export function countSquares(cuts: number): number {
  return cuts==0 ? 1 : 6* cuts**2 + 2
}
