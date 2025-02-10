const calc = function(a) {
  for (let i = 0; i < a.length; i++) {
      if (a[i] > 0) a[i] *= a[i];
      if (i % 3 === 2) a[i] = a[i] * 3;
      if (i % 5 === 4) a[i] = a[i] * -1;
  }
  return a.reduce((acc, val) => acc + val, 0);
}
