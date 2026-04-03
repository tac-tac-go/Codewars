export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  return Math.abs(a.reduce((a,b) => a*b)-b.reduce((a,b) => a*b))
}
