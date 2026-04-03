function maxSumBetweenTwoNegatives(a) {
  const fil = a.map((v,i) => v<0 ? i : -1).filter(v => v>=0)
  if(fil.length<2){
    return -1
  }
  let max=-999999
  for(let i=0;i<fil.length-1;i++){
    const val = a.slice(fil[i]+1,fil[i+1]).reduce((a,b) => a+b,0)
    if(max<val)max=val
  }
  return max
}
