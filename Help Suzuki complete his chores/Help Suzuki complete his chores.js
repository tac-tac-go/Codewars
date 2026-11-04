function choreAssignment(chores) {
  const sorted = [...chores].sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length / 2; i++) {
    result.push(sorted[i] + sorted[sorted.length - 1 - i]);
  }
  return result.sort((a, b) => a - b);
}
