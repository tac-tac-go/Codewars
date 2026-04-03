import 'dart:math';
int expressionMatter(a, b, c) {
  List<int> fruits = [a*b*c,a+b+c,(a+b)*c,a*(b+c)];
  return fruits.reduce(max);
}
