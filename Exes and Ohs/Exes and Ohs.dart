bool XO(str) {
  RegExp pattern1 = RegExp('o', caseSensitive: false);
  RegExp pattern2 = RegExp('x', caseSensitive: false);
  return pattern1.allMatches(str).length == pattern2.allMatches(str).length;
}
