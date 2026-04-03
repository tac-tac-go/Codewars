String specialNumber(n) {
  final regA = RegExp('[6-9]');
  return regA.hasMatch(n.toString())?"NOT!!":"Special!!";
}
