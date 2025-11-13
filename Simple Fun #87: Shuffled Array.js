function shuffledArray(shuffled) {
  const sum = shuffled.reduce((a,c) => a+c,0);
  for(let i=0; i<shuffled.length; i++){
    if(shuffled[i]==sum-shuffled[i]){
      return [...shuffled.slice(0,i),...shuffled.slice(i+1)].sort((a,b) => a-b);
    }
  }
}
