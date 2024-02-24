function cubeOdd(arr) {
  let total = 0;
  for(let i of arr){
    if(typeof(i)!="number"){
      return undefined
    }
    if(Math.abs(i)%2==1){
      total+=(i**3)
    }
  }
  return total
}
