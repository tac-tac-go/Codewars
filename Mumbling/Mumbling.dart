import 'package:collection/collection.dart';
String accum(String str) {
  return str.split("").mapIndexed((i,s) => s[0].toUpperCase() + (s*(i+1)).toLowerCase().substring(1)).join("-");
}
