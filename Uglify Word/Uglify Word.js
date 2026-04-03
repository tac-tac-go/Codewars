function uglifyWord(s) {
  let flag = true
  return s.split('').map(char => {
    if (char.match(/[A-Z]/i)) {
      flag = !flag
      return flag ? char.toLowerCase() : char.toUpperCase()
    } else {
      flag = true
      return char
    }
  }).join('')
}
