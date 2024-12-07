function sentencify(words) {
  res = words.join(" ")
  return res.slice(0,1).toUpperCase()+res.slice(1,)+"."
}

