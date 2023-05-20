function musicalOCD(volume){
  //3 by 3 they go..
  for(let i=1;;i++){
    if((i*2+volume)%3==0){
      return i
    }
  }
};
