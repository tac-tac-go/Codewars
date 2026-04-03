function isVow(a){
  return a.map(v => ["a","i","u","e","o"].includes(String.fromCharCode(v)) ? String.fromCharCode(v) : v)
}
