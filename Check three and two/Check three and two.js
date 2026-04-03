function checkThreeAndTwo(array) {
  let count = {}
  array.map(v => {
    count[v] = (count[v] || 0) + 1
  })
  const arr = Object.values(count).sort((a,b) => a-b)
  return arr[0]==2 && arr[1]==3
}
