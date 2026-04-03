function hexHash(code){
  const tmp = code.split("").map(v => v.charCodeAt(0).toString(16)).join("")
  return String(tmp.replace(/[a-z]/ig,"")).split("").map(v => parseInt(v)).reduce((a,b) => a+b,0)
}
