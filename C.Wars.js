function initials(n){
  let arr = n.split(" ")
  return arr.map((e,i) => i+1==arr.length ? e[0].toUpperCase()+e.slice(1).toLowerCase() : e[0].toUpperCase()).join(".")
}
