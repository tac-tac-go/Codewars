export function minimumSteps(nums: number[], value: number) {
  nums.sort((a,b) => a-b)
  let count = 0;
  let sum = nums[0];
  let index = 1;
  while(sum<value){
    sum+=nums[index]
    index+=1
    count+=1
  }
  return count;
}

