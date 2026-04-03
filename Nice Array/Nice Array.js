function isNice(arr){
  if(arr.length==0)return false
  return arr.every(i => arr.includes(i+1) || arr.includes(i-1))
}
