String abbrevName(String name) {
  List<String> arr = name.split(" ");
  return arr[0][0].toUpperCase()+"."+arr[1][0].toUpperCase();
}
