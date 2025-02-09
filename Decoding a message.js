const decode = (message) => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return message.split("").map(v => v===' ' ? ' ' : alpha[25-alpha.indexOf(v)]).join("")
}
