const encode = (str) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("")
  str = str.toLowerCase()
  return [...str].map(v => alpha.indexOf(v)!==-1 ? String(alpha.indexOf(v)+1) : v).join("");
}
