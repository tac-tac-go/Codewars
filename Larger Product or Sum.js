function sumOrProduct(array, n) {
  const arr_s = [...array].sort((a,b) => a-b)
  const ln = arr_s.slice(-n,).reduce((a,b) => a+b)
  const sn = arr_s.slice(0,n).reduce((a,b) => a*b)
  if(sn>ln){
    return "product"
  }else if(sn<ln){
    return "sum"
  }else {
    return "same"
  }
}
