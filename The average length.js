function averageLength(array) { 
  const ave_l = Math.round(array.map(v => v.length).reduce((a,b) => a+b,0)/array.length)
  return array.map(v => v.slice(0,1).repeat(ave_l))
}
