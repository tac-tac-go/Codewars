function vampireTest(a, b) {
  const str1 = String(a * b).split("").sort().join("")
  const str2 = (String(a)+String(b)).split("").sort().join("")
  return str1 === str2
}
