function squareSqueek(num) {
  //TODO: Enter your solution here
  if(num==1){return 25}
  
  if(typeof num =="number"){
    if(num<0){
      return 1
    }else{
      let i=Math.ceil(num**0.5);
      while(true){
        if(String(i**2).indexOf(String(i))!=-1){
          break
        }
        i+=1
      }
      return i**2
    }
    
  }else{
    return 0
  }
}
