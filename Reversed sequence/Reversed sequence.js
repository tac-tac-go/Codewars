const reverseSeq = n => {
  return [...Array(n).keys()].map(v => v+1).reverse();
};
