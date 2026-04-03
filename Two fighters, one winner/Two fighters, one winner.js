function declareWinner(fighter1, fighter2, firstAttacker) {
  
  if(firstAttacker===fighter2.name){
    let tmp = fighter2
    fighter2 = fighter1
    fighter1 = tmp;
  }
  
  let gage1 = fighter1.health
  let gage2 = fighter2.health
  let flag = true
  while(flag){
    gage2-=fighter1.damagePerAttack
    if(gage2<=0){
      return fighter1.toString()
    }
    gage1-=fighter2.damagePerAttack
    if(gage1<=0){
      return fighter2.toString()
    } 
  }
}
