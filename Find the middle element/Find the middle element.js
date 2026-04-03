function gimme (triplet) {
  let arr = [...triplet].sort((a,b) => a-b)
  let ansewr = arr.slice(Math.floor(arr.length/2),Math.floor(arr.length/2)+1)
  return triplet.indexOf(ansewr[0])
}
