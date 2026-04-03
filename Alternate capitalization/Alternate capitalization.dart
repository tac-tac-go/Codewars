List<String> capitalize(String x) {
  List<String> result = [];
  String val1 = "";
  String val2 = "";
  x.split("").asMap().forEach((int index,String value){
    if(index%2==0){
      val1+=value.toUpperCase();
      val2+=value.toLowerCase();
    }else{
      val1+=value.toLowerCase();
      val2+=value.toUpperCase();
    }
  });
  return [val1,val2];
}
