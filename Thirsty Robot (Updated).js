function thirstyRobot(arr){
  let [isBeer,isWine,isLiquor] = [false,false,false]
  for(let tmp of arr){
    if(isWine && tmp<=8)isBeer = true;
    else if(tmp > 8 && tmp <=15 )isWine = true
    if (tmp > 15) isLiquor = true;
  }
  if(isBeer && isLiquor) return "Poor robot"
  else if(isBeer) return "Oh dear"
  else if(isLiquor) return "Wonky robot"
  else return "Fine"
}
