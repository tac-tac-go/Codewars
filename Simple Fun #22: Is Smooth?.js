function isSmooth(arr) {
  if(arr.length <= 2)return false
  let result = 0
  if(arr.length%2===0){
    result=Number(arr.slice(arr.length/2,arr.length/2+1))+Number(arr.slice(arr.length/2-1,arr.length/2))
  }else{
    result = Number(arr.slice(Math.floor(arr.length/2),Math.floor(arr.length/2)+1))
  }
  if(arr[0]===arr[arr.length-1] && arr[0]===result)return true
  else return false
}
