function solve(s){
  let arr = s.split("")
  arr.sort()
  return "abcdefghijklmnopqrstuvwxyz".includes(arr.join(""))
}
