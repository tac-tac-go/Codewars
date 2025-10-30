function firstNSmallest(arr, n) {
  const pairs = arr.map((v, i) => ({ v, i }));
  pairs.sort((a, b) => a.v === b.v ? a.i - b.i : a.v - b.v);
  const chosen = pairs.slice(0, n);
  chosen.sort((a, b) => a.i - b.i);
  return chosen.map(p => p.v);
}
