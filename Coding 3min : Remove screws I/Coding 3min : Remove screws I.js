function sc(screws){
  let result = screws.length*2-1;
  for(let i=0;i<screws.length-1;i++){
    if(screws[i]!=screws[i+1]){
      result+=5
    }
  }
  return result;
}
