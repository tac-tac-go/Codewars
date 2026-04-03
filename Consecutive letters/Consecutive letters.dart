bool solve(String s) {
  String alpha = "abcdefghijklmnopqrstuvwxyz";
  var arr = s.split("");
  arr.sort();
  return alpha.contains(arr.join(""));
}
