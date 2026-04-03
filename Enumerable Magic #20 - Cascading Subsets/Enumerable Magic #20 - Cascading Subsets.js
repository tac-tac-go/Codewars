function eachCons(array, n) {
  let res = [];

  for(let i = 0; i < array.length; i++){
    res.push(array.slice(i,i + n));
  }

  return res.filter(e => e.length === n);
}
