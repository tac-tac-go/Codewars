function divisors(integer) {
  const result = [...Array(integer).keys()].map(i => i+1).filter(v => integer%v==0 && (v!=1 && v!=integer))
  return result.length==0 ? `${integer} is prime` : result;
};
