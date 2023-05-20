function product(a,b){
  if(a+1<b){
    let result = 1;
    for(let i=a+1;i<b;i++){
      result*=i
    }
    return result;
  }else{
    return 'Error';
  }
}
