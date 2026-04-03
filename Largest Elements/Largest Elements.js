function largest(n, array) {
  array.sort((a,b) => a-b)
  return array.slice(array.length-n)
}
