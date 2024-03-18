export function productArray(nums: number[]): number[] {
  return nums.map((e,i) => nums.slice(0,i).concat(nums.slice(i+1,)).reduce((a,b) => a*b))
}

