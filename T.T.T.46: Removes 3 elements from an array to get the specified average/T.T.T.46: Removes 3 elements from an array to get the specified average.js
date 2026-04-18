function remove3Elements(arr, average) {
  const L = arr.length;
  const totalSum = arr.reduce((a, b) => a + b, 0);
  if (L === 3) {
    return average === 0 ? arr : [];
  }
  const targetSum = totalSum - (average * (L - 3));
  for (let i = 0; i < L - 2; i++) {
    for (let j = i + 1; j < L - 1; j++) {
      for (let k = j + 1; k < L; k++) {
        if (arr[i] + arr[j] + arr[k] === targetSum) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return [];
}
