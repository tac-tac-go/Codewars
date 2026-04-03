function randomCase(x) {
  return x.split('').map(s => Math.random() < 0.5 ? s.toUpperCase() : s.toLowerCase()).join('');
}
