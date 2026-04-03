function compoundArray(a, b) {
  let x = [];
  while (a.length > 0 || b.length > 0) {
      if (a.length > 0) x.push(a.shift());
      if (b.length > 0) x.push(b.shift());
  }
  return x;
}

