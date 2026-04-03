function spongeMeme(s) {
  return s.split('').map((v, i) => (i + 1) % 2 === 1 ? v.toUpperCase() : v.toLowerCase()).join('');
}
