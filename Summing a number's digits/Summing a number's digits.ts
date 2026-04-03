export function sumDigits(n: number): number {
  return String(Math.abs(n)).split("").map(v => parseInt(v)).reduce((a,b) => a+b,0)
}
