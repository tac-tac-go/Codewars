int minSum(List<int> arr) {
  arr.sort();
  var sum = 0;
  for (var left = 0, right = arr.length - 1;left < arr.length / 2;left++, right--) {
    sum += arr[left] * arr[right];
  }
  return sum;
}
