int trailingZeros(int n){
  String input = n.toRadixString(2);
  RegExp pattern = RegExp(r"0+$");
  Match? match = pattern.firstMatch(input);
  return match?.group(0)?.length ?? 0;
}
