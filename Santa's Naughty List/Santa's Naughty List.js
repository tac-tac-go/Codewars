function findChildren(santasList, children) {
  let arr = Array.from(new Set(children.filter(v => santasList.includes(v))))
  arr.sort()
  return arr
}
