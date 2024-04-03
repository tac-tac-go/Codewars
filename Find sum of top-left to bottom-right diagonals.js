function diagonalSum(matrix){
  return matrix.map((e,i) => e[i]).reduce((a,b) => a+b,0)
}
