function solve(a,b){
  return b.map(s => [...a].filter(s2 => s2==s).length)
}
