List<int> productArray(List<int> nums) {
  List<int> result = [];
  for(var i=0;i<nums.length;i++){
    result.add((nums.sublist(0,i)+nums.sublist(i+1,)).reduce((value, element) => value * element));
  }
  return result;
}
