function explode(s) {
  return s.split("").map(i => i.repeat(Number(i))).join("")
}
