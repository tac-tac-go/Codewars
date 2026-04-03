function iccanobif(n) {
  if(n===1)return [1]
  let arr = [1,1]
  while(arr.length < n){
    let tmp = arr[arr.length-1] + arr[arr.length-2]
    arr.push(tmp)
  }
  arr.reverse()
  return arr
}
