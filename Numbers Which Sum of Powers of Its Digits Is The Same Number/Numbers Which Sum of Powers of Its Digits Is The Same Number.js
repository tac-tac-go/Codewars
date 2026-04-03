function eqSumPowdig(hMax, exp) {
  let result = []
  for(let i=2;i<=hMax;i++){
    let n_s = String(i)
    let tmp = 0;
    for(let v of n_s){
      tmp+=(Number(v)**exp)
    }
    if(tmp===i){
      result.push(i)
    }
  }
  return result
}
