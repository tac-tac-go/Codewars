function isFibo(a,b,f) {
  
  if (a === f || b === f) {
    return true;
  }
  if (b > f) {
    return false;
  }
  return isFibo(b, a + b, f);
}
