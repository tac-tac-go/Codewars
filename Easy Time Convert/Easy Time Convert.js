function timeConvert(num) { 
  num = num < 0 ? 0 : num
  const h = Math.floor(num/60)
  const m = num%60
  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`
}
