function getADownArrowOf(n) {
  let tmp = []
  for(let i=n;i>=1n;i--){
    let arr_t = Array.from({length:i},(_,i) => String(i+1).slice(-1))
    tmp.push(" ".repeat(n-i)+arr_t.concat(arr_t.slice(0,-1).reverse()).join(""))
  }
  return tmp.join("\n")
}
