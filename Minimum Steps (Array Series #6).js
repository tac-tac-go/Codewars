function minimumSteps(numbers, value){
  numbers.sort((a,b) => a-b,0)
  let count = 0;
  let sum = numbers[0];
  let index = 1;
  while(sum<value){
    sum+=numbers[index]
    index+=1
    count+=1
  }
  return count;
}
