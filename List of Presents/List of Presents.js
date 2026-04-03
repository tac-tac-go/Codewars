function howManyGifts(maxBudget, gifts){
  gifts.sort((a,b) => a-b)
  return gifts.filter(v => (maxBudget-=v) >= 0).length
}
