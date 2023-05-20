function fSquared (arr) {
  let filter1 = arr.filter(v => typeof v === 'string')
  if(filter1.length>0){return undefined}
  return arr.map(v=>v**2).filter(v => v%2==0).reduce((a,b) => a+b)
};
