function inArray(array1,array2){
  let result = []
  for(let tmp1 of array1){
    for(let tmp2 of array2){
      if(result.indexOf(tmp1)===-1 && tmp2.indexOf(tmp1)!==-1){
        result.push(tmp1)
      }
    }
  }
  return result.slice().sort()
}
