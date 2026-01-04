function getRow(N) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const r = ((N - 1) % 26) + 1; 
  return alpha[r-1].repeat(r) + alpha.slice(r)
}
