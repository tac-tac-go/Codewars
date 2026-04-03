function moveZeros(arr) {
  const fil = arr.filter(v => v!==0)
  const count_zero = arr.filter(v => v===0).length
  return fil.concat(Array(count_zero).fill(0))
}
