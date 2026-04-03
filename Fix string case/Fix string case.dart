String solve(String s) {
  return s.split("").where((v) => v == v.toUpperCase()).length > (s.length/2).ceil() ? s.toUpperCase() : s.toLowerCase();
}
