function diagonal(matrix){
  let result1 = matrix.map((_,i) => matrix[i][i]).reduce((a,b) => a+b,0)
  let result2 = matrix.map((v,i) => Array.from(v.reverse())[i]).reduce((a,b) => a+b,0)
  if(result1>result2){
    return 'Principal Diagonal win!'
  }else if(result2>result1){
    return 'Secondary Diagonal win!'
  }else{
    return 'Draw!'
  }
}

