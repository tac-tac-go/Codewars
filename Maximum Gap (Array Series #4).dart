int maxGap(nums) {
  nums.sort();
  int max = -1;
  for(var i=1;i<nums.length;i++){
    if(nums[i]-nums[i-1]>max){
      max = nums[i]-nums[i-1];
    }
  }
  return max;
}
