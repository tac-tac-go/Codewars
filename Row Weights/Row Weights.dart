List<int> rowWeights(List<int> arr) {
  var totalWeight = [0, 0];
  for (var i = 0; i < arr.length; i++) {
    totalWeight[i % 2] += arr[i];
  }
  return totalWeight;
}
