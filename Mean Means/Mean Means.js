function geo_mean(nums, arith_mean) {
  const realLength = nums.length + 1;
  const missingNumber = realLength * arith_mean - nums.reduce((a, b) => a + b, 0);
  return (nums.reduce((a, b) => a * b, 1) * missingNumber) ** (1 / realLength);
}
