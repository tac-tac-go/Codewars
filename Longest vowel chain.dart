import 'dart:math';
int solve(String s) {
  final reg = new RegExp(r'[aiueo]+');
  final matchWords = reg.allMatches(s).map((e) => e.group(0).toString().length).toList();
  return matchWords.reduce(max);
}
