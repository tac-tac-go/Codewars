export function incrementer(nums: number[]) {
  return nums.map(
    (e,i) => (e+i+1) % 10
  )
}
