function encode(string) {
  const A = {"a":"1","e":"2","i":"3","o":"4","u":"5"}
  return string.split("").map(v => A[v] || v).join("")
}

function decode(string) {
  const A = {"1":"a","2":"e","3":"i","4":"o","5":"u"}
  return string.split("").map(v => A[v] || v).join("")
}
