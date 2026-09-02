export function newAvg(arr: number[], newavg: number): number {
  const result = arr.reduce((a, b) => a + b, 0);
  const target = newavg * (arr.length + 1) - result;
  if (target >= 0) {
    return Math.ceil(target);
  }
  throw new Error("Expected New Average is too low");
}
