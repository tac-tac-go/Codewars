function cookingTime(neededPower, minutes, seconds, power) {
  const per =  Number(neededPower.replace("W",""))/ Number(power.replace("W",""))
  const sec = Math.ceil((minutes*60+seconds)*per)
  const m = Math.floor(sec/60)
  const s = sec%60
  return `${m} minutes ${s} seconds`
}
