function findOdd(A) {
  for(let i of A){
    if([...A].filter(v => v==i).length%2==1)return i
  }
}
