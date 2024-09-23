function solve(a){
  return a.filter(v1 => typeof v1 === 'number').map(v2 => v2%2===0 ? 1 : -1).reduce((a,b) => a+b,0)
};
