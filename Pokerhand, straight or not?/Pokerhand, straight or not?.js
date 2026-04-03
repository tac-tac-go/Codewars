function isStraight(cards){
  if (cards.includes(14)) { cards.push(1);}
  cards = Array.from(new Set(cards))
  cards.sort((a,b) => a-b)
  let tmp = 1;
  for(let i=0;i<cards.length-1;i++){
    if(cards[i+1]-cards[i]===1){
      tmp+=1
      if(tmp===5){
      return true
      }
    }else{
      tmp=1
    }
  }
  return false;
}
