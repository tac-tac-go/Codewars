function findNeededGuards(k) {
  let count = 0
  for(let i=0;i<k.length-1;i++){
    if(!k[i] && !k[i+1]){
      k[i+1] = true
      count++;
    }
  }
  return count
}
