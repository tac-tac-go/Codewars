export const findSquares = (num:number):string => {
  const m = Math.floor((num-1)/2)
  return `${(m+1)**2}-${m**2}`
};
