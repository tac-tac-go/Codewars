const fibsFizzBuzz = (n) => {
  const fibs = [1, 1];
  for (let i = 2; i < n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs.slice(0, n).map((num) => {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 5 === 0) return "Buzz";
    if (num % 3 === 0) return "Fizz";
    return num;
  });
};
