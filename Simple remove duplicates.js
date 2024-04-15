function solve(arr) {
  let result = []
  for(let i of [...arr].reverse()){
     if(!result.includes(i)){
       result.push(i)
     }
  }
  return result.reverse()
}
