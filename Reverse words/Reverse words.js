function reverseWords(str) {
  return str.split(" ").map(v => [...v].reverse().join("")).join(" ")
}
