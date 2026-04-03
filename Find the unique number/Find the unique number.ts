export function findUniq(arr: number[]): number {
  return arr.filter((el) => arr.indexOf(el) == arr.lastIndexOf(el))[0];
}

