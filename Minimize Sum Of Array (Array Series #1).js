function minSum(arr) {
  let arr_s = arr.slice().sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < Math.floor(arr_s.length / 2); i++) {
    result += arr_s[i] * arr_s[arr_s.length - 1 - i];
  }
  return result;
}
