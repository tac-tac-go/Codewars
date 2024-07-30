function oddOne(arr) {
  const result = arr.map((val,i) => Math.abs(val%2)==1 ? i : -1).filter(v => v>=0)
  return result.length > 0 ? result[0] : -1;
}
