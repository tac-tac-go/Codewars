int sumTwoSmallestNumbers(List<int> nums) {
  nums.sort();
  return nums[0] + nums[1];
}
