function gordon(a){
  return a.split(" ").map(v => v.replaceAll(/a/ig,"@").replaceAll(/[iueo]/gi,"*").toUpperCase()+"!!!!").join(" ")
}
