function isVeryEvenNumber(n) {
  n = n.toString();
  
  while(n.length > 1){
   n = n.split('').reduce((a,b) => Number(a) + Number(b), 0).toString();
  }
  
  return Number(n) % 2 === 0;
}
