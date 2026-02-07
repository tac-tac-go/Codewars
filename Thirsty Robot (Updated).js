function thirstyRobot(arr){
  let isCheckBeer = false;
  let isCheckWine = false;
  let isLiquor = false;
  for(let tmp of arr){
    if(tmp > 15)isLiquor = true;
    else if(tmp > 8)isCheckWine = true
    else{
      if(isCheckWine)isCheckBeer = true
    }
  }
  if(isCheckBeer && isLiquor)return "Poor robot"
  else if(isCheckBeer)return "Oh dear"
  else if(isLiquor)return "Wonky robot"
  else return "Fine"
}
