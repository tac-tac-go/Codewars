function sumArray(array) {
  if(Boolean(array)==false){return 0}
  else if(array.length<3){return 0}
  else{
    let sort_arr = array.sort((a,b)=>a-b).slice(1,-1).reduce((a,b)=>a+b)
    return sort_arr
  }
}
