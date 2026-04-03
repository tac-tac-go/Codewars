dynamic array(string){
  List<String> original = string.split(",");
  return original.length >2 ? original.sublist(1,original.length-1).join(" ") : Null;
}
