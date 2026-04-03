export function noBoringZeros(n: number): number {
  return Number(String(n).replace(/0+$/g,""));
}
