function nothingSpecial(str) {
  return typeof str === 'string' ? str.replace(/[^a-z0-9\s]/gi,"")  : "Not a string!"
}
