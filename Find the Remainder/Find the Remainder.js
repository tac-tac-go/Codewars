function remainder(n, m){
  try{
    return Math.max(n,m)%Math.min(n,m)
  }catch(err){
    return NaN
  }
}
