function deBruijnSequence(sequence, n){
  let sequence2 = sequence.repeat(2)
  let result=[]
  for(let i=0;i<sequence.length-n+2;i++){
    result.push(sequence2.slice(i,i+n))
  }
  return Array.from(new Set(result)).length==result.length ? true : false;
}
