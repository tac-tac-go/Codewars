export function oddOnesOut(nums: number[]) {
  return nums.filter(number => nums.filter(v => v==number).length%2==0)
}

