type matrix = number[][];
export function matrixAddition(a: matrix, b: matrix): matrix {
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
      a[i][j]+=b[i][j]
    }
  }
  return a
}
