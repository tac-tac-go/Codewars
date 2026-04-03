function martingale(bank, outcomes)
{
  let bet = 100
  for(let v of outcomes){
     if(v === 1){
       bank += bet
       bet = 100
     }else{
       bank -= bet
       bet = 2*bet
     }
  }
  return bank
}
