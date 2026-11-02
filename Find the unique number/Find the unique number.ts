export function findUniq(arr: number[]): number {
  const common = arr[0] === arr[1] ? arr[0] : arr[2]
  return arr.find((v) => v !== common) as number
}
