function findMissingNumbers(arr){
  if(arr.length<2)return []
  let result = []
  for(let i=arr[0];i<=arr[arr.length-1];i++){
    if(!arr.includes(i)){
        result.push(i)
    }
  }
  return result
}
