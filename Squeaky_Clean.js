function squeakyClean(arr) {
  return arr.filter(val => (val!='' && val!=0 && val!=null && val!=undefined))
}
