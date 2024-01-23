function reverseLetter(str) {
  return str.replaceAll(/[^a-z]/g,"").split("").reverse().join("")
}
