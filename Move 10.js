function moveTen(s){
  const alpha = "abcdefghijklmnopqrstuvwxyz"
  return s.split("").map(v => alpha[(alpha.indexOf(v)+10)%26]).join("")
}
