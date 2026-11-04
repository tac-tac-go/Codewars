export function choreAssignment(chores:number[]): number[] {
  const sorted : number[] = [...chores].sort((a, b) => a - b);
  const result : number[] = [];
  for (let i = 0; i < sorted.length / 2; i++) {
    result.push(sorted[i] + sorted[sorted.length - 1 - i]);
  }
  return result.sort((a, b) => a - b);
}
