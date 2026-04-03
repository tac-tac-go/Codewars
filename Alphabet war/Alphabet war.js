function alphabetWar(fight)
{
  const left = {'w':4,'p':3,'b':2,'s':1}
  const right = {'m':4,'q':3,'d':2,'z':1}
  let leftC = 0;
  let rightC = 0;
  for(let i of fight){
    leftC += left[i] || 0
    rightC += right[i] || 0
  }
  if(leftC > rightC){
    return "Left side wins!"
  }else if(leftC < rightC){
    return "Right side wins!"
  }else{
    return "Let's fight again!" 
  }
}
