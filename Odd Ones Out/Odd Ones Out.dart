List<int> oddOnesOut(List<int> nums) {
  return nums.where((number) => nums.where((v) => v == number).length % 2 == 0).toList();
}
