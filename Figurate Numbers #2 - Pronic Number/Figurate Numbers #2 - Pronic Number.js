function isPronic(n){
  return n >= 0 && Math.sqrt(1 + 4 * n) % 1 === 0;
}
