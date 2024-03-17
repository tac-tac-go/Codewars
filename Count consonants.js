function consonantCount(str) {
  return str.replace(" ","").split("").filter(i => "bcdfghjklmnpqrstvwxyz".indexOf(i.toLowerCase())!=-1).length
}
