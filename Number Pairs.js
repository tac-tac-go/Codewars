function getLargerNumbers(a, b) {
  return a.map((_,i) => Math.max.apply(null,[a[i],b[i]]));
}
