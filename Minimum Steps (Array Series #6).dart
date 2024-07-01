int minimumSteps(List<int> nums, int value) {
  nums.sort();
  if (nums[0] > value) return 0;
   
  int i = 0;
  int t = 0;
  
  while(t < value) t += nums[i++];
  
  return i - 1;
}
