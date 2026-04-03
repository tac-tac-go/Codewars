export function multipleOfIndex(array: number[]):number[] {
  let count = [];
  for(let i=0;i<array.length;i++){
    if(array[i]%i==0 || (array[i]==0 && i==0)){
      count.push(array[i])
    }
  }
  return count
}
