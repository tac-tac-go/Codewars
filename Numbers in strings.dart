int solve(String s) {
  var arr = s.split(RegExp("[a-z]+"));
  int max = -9999999;
  for(var i=0;i<arr.length;i++){
    if(arr[i].length > 0 && int.parse(arr[i]) > max){
      max = int.parse(arr[i]);
    }
  }
  return max;
}
