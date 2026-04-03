function comes_after(str,l) {
  const reg = new RegExp(`(?<=${l})[a-zA-Z]`,"ig")
  return (str.match(reg) || []).join("")
}
