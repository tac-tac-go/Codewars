function digitize(n) {
 return String(n).split("").reverse().map(v => Number(v))
}
