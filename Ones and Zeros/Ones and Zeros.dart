int binaryArrayToNumber(List<int> arr) {
  return int.parse(arr.join("").toString(), radix: 2);
}
