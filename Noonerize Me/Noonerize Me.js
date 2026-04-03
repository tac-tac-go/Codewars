function noonerize(numbers) {
  let x, y;
  [x, y] = numbers.map(String);
  [x, y] = [y[0] + x.slice(1), x[0] + y.slice(1)].map(Number);
  return x && y ? Math.abs(x - y) : 'invalid array';
}
  
