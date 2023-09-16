function twoHighest(arr) {
  let arr2 = Array.from(new Set(arr)).sort((a,b) => b-a)
  if(arr.length==0){
    return []
  }else if(arr.length==1){
    return [arr2[0]]
  }else{
    return arr2.slice(0,2)
  }
}
