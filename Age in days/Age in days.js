function ageInDays(year, month, day){
  const now = new Date();
  const birth = new Date(year,month-1,day)
  return `You are ${Math.floor((now-birth)/(24*60*60*1000))} days old`
}
