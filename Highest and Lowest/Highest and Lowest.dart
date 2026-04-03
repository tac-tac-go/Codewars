String highAndLow(String numbers) {
  List<int> arr = numbers.split(" ").map((e) => int.parse(e)).toList();
  arr.sort();
  return "${arr[arr.length-1]} ${arr[0]}";
}

