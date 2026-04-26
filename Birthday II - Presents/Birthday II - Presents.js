function present(x, y) {
  if (x === 'badpresent') return 'Take this back!';
  if (x === 'dog') return `pass out from excitement ${y} times`;
  if (x === 'goodpresent') {
    return [...x].map(v => String.fromCharCode(v.charCodeAt(0) + y)).join("");
  }
  if (x === 'bang') {
    return [...x].reduce((sum, v) => sum + (v.charCodeAt(0) - y), 0);
  }
  if (x === 'crap' || x === 'empty') {
    return [...x].sort().join("");
  }
}
