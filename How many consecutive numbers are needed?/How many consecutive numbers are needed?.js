function consecutive(array) {
  if(array.length < 2)return 0
  const min = Math.min.apply(null,array)
  const max = Math.max.apply(null,array)
  return Math.abs(max-min+1)-array.length
}
