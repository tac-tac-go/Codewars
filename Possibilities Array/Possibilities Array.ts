export function isAllPossibilities(x: number[]): boolean {
  const arr = [...Array(x.length).keys()]
  return arr.every(v => x.includes(v))
}
