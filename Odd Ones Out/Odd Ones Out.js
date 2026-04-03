function oddOnesOut(nums) {
  return nums.filter(number => nums.filter(v => v==number).length%2==0)
}
