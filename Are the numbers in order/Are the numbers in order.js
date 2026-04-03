function inAscOrder(arr) {
  return JSON.stringify([...arr].sort((a,b) => a-b))=== JSON.stringify(arr)
}
