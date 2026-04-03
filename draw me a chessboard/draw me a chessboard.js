function chessBoard(rows, columns) {
  let arr = [];
  for(let i=0;i<rows;i++){
    let tmp = []
    for(let j=0;j<columns;j++){
      if(i%2==0){
        if(j%2==0){
          tmp.push("O")
        }else{
          tmp.push("X")
        }
        
      }else{
        if(j%2==0){
          tmp.push("X")
        }else{
          tmp.push("O")
        }
      }
    }
    arr.push(tmp)
  }
  return arr
}
