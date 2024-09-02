function matrix(array) {
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
      if(i==j){
        if(array[i][j]<0){
          array[i][j]=0
        }else{
          array[i][j]=1
        }
      }
    }
  }
  return array
} 
