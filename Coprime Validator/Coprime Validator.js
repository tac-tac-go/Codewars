const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

function isCoprime(x, y) {
  return gcd(x,y)===1
}
