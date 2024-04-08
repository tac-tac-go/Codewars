function swap (string) {
  return string.split("").map(s => ["a","i","u","e","o"].includes(s) ? s.toUpperCase() : s).join("")
}
