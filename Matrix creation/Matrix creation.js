function getMatrix(number) {
  let result = []
  for(let i=0;i<number;i++){
    let tmp = [];
    for(let j=0;j<number;j++){
      if(i===j){
        tmp.push(1)
      }else{
        tmp.push(0)
      }
    }
    result.push(tmp)
  }
  return result
} 
