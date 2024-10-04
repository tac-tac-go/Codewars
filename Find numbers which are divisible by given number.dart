List<int> divisibleBy(List<int> nums, int divisor) {
  return nums.where((v) => v%divisor==0).toList();
}
