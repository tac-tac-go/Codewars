import "dart:math";
String automorphic(int n) {
  return (pow(n,2).toString()).endsWith(n.toString()) ? "Automorphic" : "Not!!";
}
