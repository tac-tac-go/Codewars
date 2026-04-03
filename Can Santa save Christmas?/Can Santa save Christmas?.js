function determineTime (durations) {
  let total = 0
  for(let duration of durations){
    const [h,m,s] = duration.split(":").map(Number)
    total += (h*3600)+ (m*60)+s
  }
  const allowed_time  = 24*60*60
  return total <= allowed_time
}
