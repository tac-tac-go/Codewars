export function maxGap(numbers: number[]): number {
  numbers.sort((a,b) => a-b)
  let max = -1
  for(let i=1;i<numbers.length;i++){
    if(numbers[i]-numbers[i-1]>max){
      max = numbers[i]-numbers[i-1]
    }
  }
  return max
}

