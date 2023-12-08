List<int> countBy(int x, int n) {
  var list = List.generate(n, (i) => x*(i+1));
  return list;
}
