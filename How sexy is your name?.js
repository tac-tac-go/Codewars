function sexyName(name) {
  const sum = name.split("").map(v => SCORES[v.toUpperCase()] || 0).reduce((a,b) => a+b,0)
  if(sum<=60)return 'NOT TOO SEXY'
  else if(sum<=300)return 'PRETTY SEXY'
  else if(sum<=599)return 'VERY SEXY'
  else return 'THE ULTIMATE SEXIEST'
}
