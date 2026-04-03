function vowelOne(s){
  return s.split("").map(si => /[aiueo]/i.test(si) ? "1" : "0").join("")
}
