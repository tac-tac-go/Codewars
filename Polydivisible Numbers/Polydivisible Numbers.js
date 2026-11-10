function polydivisible(x) {
  let prefix = 0;
  return [...String(x)].every((d, i) => {
    prefix = prefix * 10 + Number(d);
    return prefix % (i + 1) === 0;
  });
}
