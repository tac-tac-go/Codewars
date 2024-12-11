function testit(s){
  return s.split(" ").map(s1 => s1.slice(0,s1.length-1).toLowerCase()+s1.slice(s1.length-1).toUpperCase()).join(" ")
}
