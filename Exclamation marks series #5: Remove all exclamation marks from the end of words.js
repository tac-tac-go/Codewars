function remove (string) {
  return string.split(" ").map(v => v.replace(/!+$/g,"")).join(" ")
}
