Map<String, int> count(String s) {
  Map<String,int> result = {};
  for(var s_v in s.split("")){
    result[s_v]= (result[s_v] ?? 0) + 1;
  }
  return result;
}
