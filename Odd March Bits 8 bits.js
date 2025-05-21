function bitMarch(n) {
  let result = [];
  for (let i = 0; i <= 8 - n; i++) {
    let step = Array(8).fill(0);
    for (let j = 0; j < n; j++) {
      step[i + j] = 1;
    }
    step.reverse()
    result.push(step);
  }
  return result;
}

