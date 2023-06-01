export function monkeyCount(n: number) {
  return [...Array(n).keys()].map(v => v+1)
}
