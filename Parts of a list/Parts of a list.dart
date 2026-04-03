List<List<String>> partlist(List<String> arr) {
  List<List<String>> result = [];
  for(int i=0;i<arr.length-1;i++){
    result.add([arr.sublist(0,i+1).join(" "),arr.sublist(i+1,).join(" ")]);
  }
  return result;
}
