function sumOfMinimums(arr) {
  return arr.map( i => Math.min.apply(null,i)).reduce((a,b) => a+b,0)
}
