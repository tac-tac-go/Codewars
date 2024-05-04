List<int> menFromBoys(arr) {
  List<int> even = arr.where((v) => v%2==0).toSet().toList();
  List<int> odd = arr.where((v) => v%2==1).toSet().toList();
  even.sort();
  odd.sort((a,b) => -1 * a.compareTo(b));
  return even + odd;
}
