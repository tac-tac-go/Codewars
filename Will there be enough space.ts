export function enough(cap: number, on: number, wait: number): number {
  return Math.max((on+wait)-cap,0)
}


