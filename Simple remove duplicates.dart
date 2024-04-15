List<int> solve(List<int> arr) {
  List<int> result = [];
  for(var i=arr.length-1;i>=0;i--){
    if(!result.contains(arr[i])){
      result.add(arr[i]);
    }
  }
  return result.reversed.toList();
}
