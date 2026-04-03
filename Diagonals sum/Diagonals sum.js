function sum(matrix) {
  const matrix_r = [...matrix].map(v => v.slice().reverse())
  let result = 0;
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){
      if(i===j){
        result+=matrix[i][j]
        result+=matrix_r[i][j]
      }
    }
  }
  return result
}
