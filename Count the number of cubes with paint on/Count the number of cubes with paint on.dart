import 'dart:math';
int countSquares(int cuts) {
   return (6 * pow(cuts,2)).toInt() + 2;
}
