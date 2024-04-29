function evenChars(string) {
  if(string.length<2 || string.length>100)return "invalid string"
  return string.split("").map((e,i) => (i+1)%2==0 ? e : "").filter(i => i)
}
