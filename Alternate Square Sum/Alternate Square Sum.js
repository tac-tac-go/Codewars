function alternateSqSum(arr){
  return arr.map((v,i) => i%2==0 ? v : v**2).reduce((a,b) => a+b,0)
}
