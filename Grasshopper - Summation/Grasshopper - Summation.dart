int summation(int n) {
  var list = List.generate(n,(i) => i+1);
  return list.fold(0,(a,b) => a+b);
}
