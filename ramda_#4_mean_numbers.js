const mean3 = numbers => {
  //
  if(numbers.length==0){
    return null
  }
  let result=[]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]%3!=0){
      return null
    }else{
      result.push(numbers[i])
    }
  }
  return result.reduce((a,b) => a+b)/result.length
}
