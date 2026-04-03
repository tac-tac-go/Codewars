function total(arr) {
  while(arr.length>1){
    let next = []
    for(let i=0;i<arr.length-1;i++){
      next.push(arr[i]+arr[i+1])
    }
    arr = next
  }
  return arr[0]
}
