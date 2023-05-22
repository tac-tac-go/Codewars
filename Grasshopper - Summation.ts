export const summation = (num:number)=> { 
  return [...Array(num).keys()].map(v => v+1).reduce((a,b) => a+b,0)
}
