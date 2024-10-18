List<int> flattenAndSort(List<List<int>> nums) {
  List<int> arr = nums.expand((v) => v).toList()..sort();
  return arr;
}
