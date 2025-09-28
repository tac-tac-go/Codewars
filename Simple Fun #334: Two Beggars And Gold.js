function distributionOf(a) {
  let beggars = [0, 0];
  while (a.length > 0) {
    if (a.length > 0) beggars[0] += a[0] >= a[a.length - 1] ? a.shift() : a.pop();
    if (a.length > 0) beggars[1] += a[0] >= a[a.length - 1] ? a.shift() : a.pop();
  }
  return beggars;
}
