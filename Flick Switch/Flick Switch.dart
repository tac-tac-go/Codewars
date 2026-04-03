List<bool> flickSwitch(List<String> arr) {
  bool check = true;
  List<bool> result = [];
  for (String i in arr) {
    if (i == "flick") {
      check = !check;
      result.add(check);
    } else {
      result.add(check);
    }
  }
  return result;
}


