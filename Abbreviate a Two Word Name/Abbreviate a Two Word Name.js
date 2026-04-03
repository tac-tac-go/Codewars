function abbrevName(name){
  return name.split(" ").map(v => v.slice(0,1).toUpperCase()).join(".")
}
