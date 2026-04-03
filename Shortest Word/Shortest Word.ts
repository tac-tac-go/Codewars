export function findShort(s: string): number {
  return Math.min(...s.split(" ").map(v => v.length))
}
