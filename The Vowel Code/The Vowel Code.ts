interface arr  {
  [key : string] : string;
}
// turn vowels into numbers
export function encode(string: string): string {
  const A:arr = {"a":"1","e":"2","i":"3","o":"4","u":"5"}
  return string.split("").map(v => A[v] || v).join("")
}

// turn numbers back into vowels
export function decode(string: string): string {
  const A:arr = {"1":"a","2":"e","3":"i","4":"o","5":"u"}
  return string.split("").map(v => A[v] || v).join("")
}
