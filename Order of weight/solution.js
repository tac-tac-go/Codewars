function arrange(arr) {
  const unit = { G: 1, KG: 1000, T: 1000000 };
  const toGram = (s) => {
    const m = s.match(/^([\d.]+)(KG|G|T)$/);
    return parseFloat(m[1]) * unit[m[2]];
  };
  return [...arr].sort((a, b) => toGram(a) - toGram(b));
}
