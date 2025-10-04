function cubeTimes(times) {
  const times_c = [...times].sort((a,b) => a-b)
  const times_a = Math.round((times_c.slice(1,times.length-1).reduce((a,b) => a+b,0)/(times.length-2))*100)/100
  return [times_a,times_c[0]]
}
