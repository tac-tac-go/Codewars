function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map(i => i.replace("rotten","").toLowerCase()) : []
}
