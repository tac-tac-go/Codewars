function isPerfect(n) {
  if (n <= 1) return false;
  let sum = 1;
  const limit = Math.sqrt(n);

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      sum += i;
      const partner = n / i;
      if (partner !== i) sum += partner;
    }
  }

  return sum === n;
}
