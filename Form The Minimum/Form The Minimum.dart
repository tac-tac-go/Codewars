int minValue(arr) {
  var arr_c = Set.from(arr).toList();
  arr_c.sort();
  return int.parse(arr_c.join(""));
}
