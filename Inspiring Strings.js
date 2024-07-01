function longestWord(stringOfWords) {
 const arr = stringOfWords.split(" ")
 const max_length = Math.max.apply(null,arr.map(v => v.length).slice())
 const filtered = arr.filter((v) => v.length==max_length)
 return filtered.slice(-1)[0]
}
