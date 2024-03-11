import "dart:math";

String disariumNumber(int n) {
  String sn = "${n}";
  int s = 0;
  
  for (int i = 0; i < sn.length; i++) {
    s = s + pow(int.parse(sn[i]),i+1).floor();
  }
  
  return s == n ? "Disarium !!" : "Not !!";
}
