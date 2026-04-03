export function smaller(nums: number[]): number[] {
  return nums.map((e,i) => nums.slice(i+1,).filter((e2) => nums[i]>e2).length)
}
