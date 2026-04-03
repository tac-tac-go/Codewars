function solution(string) {
  return string.split("").map(v => v === v.toUpperCase() ? " "+ v : v).join("");
}
