function smallestInteger(matrix) {
  const flat = matrix.flat()
  flat.sort()
  let index = 0
  while(flat.includes(index)){
    index+=1
  }
  return index
}
