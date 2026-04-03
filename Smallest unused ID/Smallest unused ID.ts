export function nextId(ids: number[]): any {
  return [...Array(ids.length+1).keys()].find(v => ids.indexOf(v)==-1)
}
