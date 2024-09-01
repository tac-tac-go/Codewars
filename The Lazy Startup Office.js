function binRota(arr){
  let result = []
  for(let i=0;i<arr.length;i++){
    if(i%2==0){
      result = result.concat(arr[i])
    }else{
      result = result.concat(arr[i].slice().reverse())
    }
  }
  return result
}
