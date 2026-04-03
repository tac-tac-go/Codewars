function differentSquares(matrix) {
  let s = new Set()
  if(matrix.length<2 || matrix[0].length<2)return 0
  let count = 0
  for(let i=0;i<matrix.length-1;i++){
    for(let j=0;j<matrix[0].length-1;j++){
      s.add(matrix.slice(i,i+2).map(row => row.slice(j,j+2)).flat().join(","))
    }
  }
  return s.size
}
