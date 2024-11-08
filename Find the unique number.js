function findUniq(arr) {
  return arr.find((value,index) => arr.indexOf(value) === arr.lastIndexOf(value))
}

