function uniTotal (string) {
  return string.split("").map(v => v.charCodeAt(0)).reduce((a,b) => a+b,0)
}
