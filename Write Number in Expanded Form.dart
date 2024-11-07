String expandedForm(int num) {
  List<String> result = [];
  List<String> sub_a = num.toString().split("");
  for(int i =0;i<num.toString().length;i++){
    String num_s = sub_a.sublist(i,i+1).join("");
    if(num_s!="0"){
      result.add(num_s+"0"*sub_a.sublist(i+1,).join("").length); 
    }
  }
  return result.join(" + ");
}
