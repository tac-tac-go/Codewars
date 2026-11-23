function trouble(x, t) {
  const result = [];
  
  for (const n of x) {
    const last = result[result.length - 1];
    if (result.length === 0 || last + n !== t) {
      result.push(n);
    }
  }
  return result;
}