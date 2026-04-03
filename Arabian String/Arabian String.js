function camelize(str){
  return str.split(/[^a-z0-9]/i).filter(Boolean).map(v => v[0].toUpperCase()+v.slice(1,).toLowerCase()).join("")
}
