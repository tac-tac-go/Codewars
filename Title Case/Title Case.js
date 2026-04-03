function titleCase(title, minorWords="") {
  if(title==="")return ""
  const minor_l = minorWords.split(" ").map(v => v.toLowerCase())
  return title.toLowerCase().split(" ").map((v,i) => i===0 || !minor_l.includes(v) ? v[0].toUpperCase()+v.slice(1,).toLowerCase() : v.toLowerCase()).join(" ")
}

