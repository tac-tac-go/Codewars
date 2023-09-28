function cutIt(arr){
  const min_length = Math.min(...arr.map(v => v.length))
  return arr.map(v => v.slice(0,min_length))
}
