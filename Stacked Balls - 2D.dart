import "dart:math";
double stackHeight2d(int layers) {
  if (layers <= 0) return 0;
  if (layers == 1) return 1;
  return 1 + (layers - 1) * sqrt(3) / 2;
}
