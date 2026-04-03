function solution(nums){
  return nums ? nums.slice().sort((a,b) => a-b) : [];
}
