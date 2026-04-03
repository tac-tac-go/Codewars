function SumSquares(l){
    return flatten(l).map(v => v**2).reduce((a,b) => a+b,0)
}
                    
function flatten(arr){
  return arr.reduce((acc,cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),[])      
}
