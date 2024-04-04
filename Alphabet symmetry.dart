List<int> solve(List<String> arr) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  List<int> result = [];
  for(var i=0;i<arr.length;i++){
    var count = 0;
    for(var j=0;j<arr[i].length;j++){
      if(alpha.split("").indexOf(arr[i][j].toLowerCase())==j){
        count +=1;
      }
    }
    result.add(count);
  }
  return result;
}
