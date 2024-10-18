export function solution(nums: number[]): number[] {
  return nums ? nums.slice().sort((a,b) => a-b) : [];
}
