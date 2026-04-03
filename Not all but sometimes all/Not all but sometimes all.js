function remove(str, what) {
  let result = [];
  for (let char of str) {
    if (what[char]) --what[char];
    else result.push(char);
  }
  return result.join("");
}
