function ageInDays(year, month, day){
  const now = new Date();
  let one = 24*60*60*1000;
  const birth = new Date(year,month-1,day)
  return `You are ${Math.floor((now-birth)/one)} days old`
}
