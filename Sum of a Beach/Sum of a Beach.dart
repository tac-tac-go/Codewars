int sumOfABeach(String beach) {
  final reg = RegExp('sand|water|fish|sun', caseSensitive: false);
  return reg.allMatches(beach ?? "").length;
}
