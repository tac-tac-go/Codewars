function shuffleIt(arr,...args){
  for(let [v1,v2] of args){
    const tmp = arr[v1]
    arr[v1] = arr[v2]
    arr[v2] = tmp
  }
  return arr 
}
