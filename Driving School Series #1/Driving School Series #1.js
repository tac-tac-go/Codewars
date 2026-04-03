function passed (list) { 
  const result = list.filter(v => v<=18)
  return result.length==0 ? 'No pass scores registered.' : Math.round(result.reduce((a,b) => a+b,0)/result.length)
} 
