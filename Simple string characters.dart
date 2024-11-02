List<int> solve(String s) {
  RegExp reg1 = new RegExp(r"[A-Z]");
  RegExp reg2 = new RegExp(r"[a-z]");
  RegExp reg3 = new RegExp(r"[0-9]");
  RegExp reg4 = new RegExp(r"[^a-zA-Z0-9]");
  return [reg1.allMatches(s).length,reg2.allMatches(s).length,reg3.allMatches(s).length,reg4.allMatches(s).length];
}

