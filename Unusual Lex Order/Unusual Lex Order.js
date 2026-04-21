const rev_s = (s) => s.split("").reverse().join("")
const unusualLexOrder = (arr) => arr.map(rev_s).reverse().sort().map(rev_s)
