func stackHeight2D(_ layers: Int) -> Double {
  if layers <= 0{ return 0 };
  if layers <= 1{ return 1 };
  return 1.0 + Double(layers - 1) * (sqrt(3.0) / 2.0)
}
