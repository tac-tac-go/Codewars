export function sortByHeight(list: number[]): number[] {
  const sorted = list.filter(v => v !== -1).sort((a, b) => a - b); 
  let index = 0;
  return list.map(v => (v === -1 ? -1 : sorted[index++]));
}
