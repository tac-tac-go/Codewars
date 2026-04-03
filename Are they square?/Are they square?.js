const isSquare = function(arr){
  return arr.length==0 ? undefined : arr.every(tmp => (tmp**0.5)%1==0)
}
