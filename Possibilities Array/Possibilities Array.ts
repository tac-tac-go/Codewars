export function isAllPossibilities(x: number[]): boolean {
  const set = new Set(x)
  return Array.from({ length: x.length }, (_, i) => i).every(i => set.has(i))
}
