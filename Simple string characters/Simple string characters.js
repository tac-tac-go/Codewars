function solve(s){
  let a = (s.match(/[A-Z]/g) || []).length
  let b = (s.match(/[a-z]/g) || []).length
  let c = (s.match(/[0-9]/g) || []).length
  let d = (s.match(/[^a-zA-Z0-9]/g) || []).length
  return [a,b,c,d]
}
