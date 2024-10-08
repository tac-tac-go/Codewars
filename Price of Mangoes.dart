import 'dart:math';
int mango(int quantity, int price) {
  return (quantity-(quantity/3).floor())*price;
}
