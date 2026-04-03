function evenLast(numbers) {
  return numbers.length>0 ? numbers.filter((_,i) => i%2==0).reduce((a,b) => a+b,0)*numbers.slice(-1) : 0;
}
