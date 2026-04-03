function switcheroo(x){
  return x.split("").map(v => v==="a" ? "b" :v==="b" ? "a" : v).join("")
}
