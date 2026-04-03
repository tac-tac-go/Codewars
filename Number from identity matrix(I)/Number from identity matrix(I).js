function solve(n) {
  const arr = Array.from({length:n},(_,row) => Array.from({length:n},(_,col) => (row===col) ? "1" : "0").join("")).join("")
  return BigInt('0b' + arr);
}
