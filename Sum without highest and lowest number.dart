int sumArray(List<int>? arr) {
  if (arr == null || arr.length <= 1) {
    return 0;
  }
  arr.sort();
  return arr.sublist(1, arr.length - 1).fold(0,(total,element) => total+element);
}
