String longest(String a, String b) {
  return ((a+b).split("").toSet().toList()..sort()).join("");
}
