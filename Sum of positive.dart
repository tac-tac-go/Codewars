int positiveSum(List<int> arr) {
  var temp = 0;
  for (int num in arr) {
     if(num>0){
       temp+=num;
     }
  }
  return temp;
}
