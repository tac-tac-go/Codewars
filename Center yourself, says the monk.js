function center (strng, width, fill = ' ') {
  if(strng.length>=width)return strng
  width -= strng.length
  const right = Math.floor(width/2)
  const left = width - right
  return `${fill.repeat(left)}${strng}${fill.repeat(right)}`
}

