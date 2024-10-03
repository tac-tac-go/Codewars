String disemvowel(String str) {
  final reg = RegExp(r'[aiueo]',caseSensitive: false);
  return str.replaceAll(reg,'');
}
