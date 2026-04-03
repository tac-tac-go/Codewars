function isDd(n) {
  const set_n = Array.from(new Set(String(n)))
  const arr = String(n).split("")
  for(let v of set_n){
    if(arr.filter(tmp => tmp===v).length===Number(v))return true
  }
  return false
}
