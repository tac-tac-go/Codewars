function peelPairs(str, n) {
  const arr = str.split('').map(Number);
  let i = 0;
  while (i < arr.length) {
    const j = arr.findIndex((v, k) => k > i && arr[i] + v === n);
    if (j !== -1) {
      arr.splice(j, 1); 
      arr.splice(i, 1); 
    } else {
      i++;
    }
  }
  return arr.join('');
}
