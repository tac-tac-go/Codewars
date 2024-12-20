function middleMe(N, X, Y){
  let m = Y.repeat(Math.floor(N/2))
  return N%2==0 ? m+X+m : X
}
