const findAll = (array, n) => {
  return array.map((v,i) => v==n ? i : -1).filter(v => v>=0)
}
