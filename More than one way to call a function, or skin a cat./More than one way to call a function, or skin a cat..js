function sum (a,b){
  if (b !== undefined) {
    return a + b;
  }

  return function(nextB) {
    return a + nextB;
  };
}
