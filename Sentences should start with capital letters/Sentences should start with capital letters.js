const fix = (paragraph) => {
  return paragraph.split(/\.\s/).map(v => v.slice(0,1).toUpperCase()+v.slice(1,)).join(". ")
}
