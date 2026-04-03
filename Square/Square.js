function squareRoot(numbers){
    //solve problem here
    if(numbers.length==0){
      return 0
    }
    
    sum = numbers.reduce((a,b) => a+b)
    if((sum**0.5)%1==0){
      return sum**0.5
    }else{
      return sum
    }
}

