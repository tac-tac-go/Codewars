function broken(x){
  return x.split("").map(v => !parseInt(v) ? "1": "0").join("")
}
