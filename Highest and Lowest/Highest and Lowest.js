function highAndLow(numbers){
  const arr = numbers.split(" ");
  arr.sort((a,b) => a-b);
  return `${arr.slice(-1,)} ${arr[0]}`
}
