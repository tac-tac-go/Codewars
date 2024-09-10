function orderWord(s){
  if(!s)return "Invalid String!"
  return [...s].sort().join("")
}
