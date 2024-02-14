function myLanguages(obj) {
  return Object.keys(obj).filter(i => obj[i] > 59).sort((a, b) => obj[b] - obj[a]);
}
