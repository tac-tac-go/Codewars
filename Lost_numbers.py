const findAndSumm = (arr1, arr2) => {
  // Keep it simple :)
  let result1 = arr1.flat(Infinity)
  let result2 = arr2.flat(Infinity)
  let final = 0
  for(let i of result1){
    final += i;
  }
  
  for(let i of result2){
    final += i;
  }
  
  return final;
  
}
