function unflatten (flatArray)
{
  let index = 0
  let result = []
  while(index<flatArray.length){
    if(flatArray[index]<3){
      result.push(flatArray[index])
      index+=1
    }else{
      result.push(flatArray.slice(index,index+flatArray[index]))
      index+=flatArray[index]
    }
  }
  return result
}
