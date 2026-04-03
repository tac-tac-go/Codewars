import 'dart:math';
int predictAge(int age1,int age2, int age3, int age4, int age5, int age6, int age7, int age8) {
  List<int> ages = [age1, age2, age3, age4, age5, age6, age7, age8];
  int sum = ages.fold(0, (prev, element)=>(element * element) + prev);
  return (sqrt(sum) / 2).floor();
}
