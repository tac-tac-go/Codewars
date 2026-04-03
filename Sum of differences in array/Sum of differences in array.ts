export function sumOfDifferences(arr: number[]): number {
  arr = arr.sort((a,b) => b-a)
  console.log(arr)
  let count = 0;
  for(let i=0;i<arr.length-1;i++){
    count += arr[i]-arr[i+1]
  }
  return count
}
