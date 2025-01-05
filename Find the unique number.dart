List<String> solution(String s) {
  if(s.length%2==1){
    s+="_";
  }
  List<String> result = [];
  List<String> s_c = s.split("");
  for(int i=0;i<s.length;i+=2){
    result.add(s_c.sublist(i,i+2).join(""));
  }
  return result;
}
