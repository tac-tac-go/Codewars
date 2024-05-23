List<int> wordValue(List<String> arr) {
  final alpha = "abcdefghijklmnopqrstuvwxyz";
  List<int> result = [];
  for (int index = 0; index < arr.length; index++) {
    List<int> tmp = [];
    for (int i = 0; i < arr[index].length; i++) {
      if (alpha.indexOf(arr[index][i]) != -1) {
        tmp.add((alpha.indexOf(arr[index][i]) + 1) * (index + 1));
      }
    }
    result.add(tmp.fold(0, (a, b) => a + b));
  }
  return result;
}
