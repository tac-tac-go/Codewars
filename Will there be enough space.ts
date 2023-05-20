export function enough(cap: number, on: number, wait: number): number {
  return cap <=on + wait ?  (on+wait)-cap : 0
}
