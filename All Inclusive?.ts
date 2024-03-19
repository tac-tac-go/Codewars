export function containAllRots(strng: string, arr: string[]): boolean {
  return strng.split("").map((_,i) => strng.slice(i,)+strng.slice(0,i)).every(e => arr.includes(e))
}
