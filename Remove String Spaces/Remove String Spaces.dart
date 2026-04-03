String noSpace(String x) {
  final regA = RegExp(r'\s');
  return x.replaceAll(regA, '');
}
