List<int> incrementer(List<int> nums) {
  List<int> result=[];
  for(var i=0;i<nums.length;i++){
    result.add((nums[i]+i+1)%10);
  }
  return result;
}
