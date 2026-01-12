const check_bf = (n) => {
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0)return n/i;
  }
  return n;
}

function distributeGifts(arr){
  return arr.reduce((acc,cur) => acc+check_bf(cur),0)
}
