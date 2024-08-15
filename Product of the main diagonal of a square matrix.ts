export function mainDiagonalProduct(mat: number[][]): number {
  let result = 1;
  for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat.length;j++){
      if(i==j){
        result*=mat[i][j]
      }
    }
  }
  return result
}
