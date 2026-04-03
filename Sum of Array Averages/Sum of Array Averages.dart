int sumAverage(List<List<int>> arr) {
  double result = 0;
  for(var tmp_a in arr){
    int ave = 0;
    for(var tmp_v in tmp_a){
      ave+=tmp_v;
    }
    result += ave/tmp_a.length;
  }
  return result.floor();
}
