function colourAssociation(array){
  let result = [];
  for(let [i,j] of array){
    let tmp = {};
    tmp[i]=j
    result.push(tmp)
  }
  return result
}
