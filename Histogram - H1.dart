String histogram(List<int> results) {
  List<String> result = [];
  for(int i=1;i<=results.length;i++){
    if(results[i-1]!=0){
      result.add("${i}|"+"#"*results[i-1]+" ${results[i-1]}");
    }else{
      result.add("${i}|"+"#"*results[i-1]);
    }
  }
  result  = result.reversed.toList();
  return result.join("\n")+"\n";
}
