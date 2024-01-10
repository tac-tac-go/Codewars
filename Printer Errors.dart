String printerError(String s) {
  final reg = RegExp(r'[n-z]');
  final matches = reg.allMatches(s);
  return "${matches.length}/${s.length}";
}
