function getPercentage(sent, limit=1000){
  const val = Math.floor(sent/limit*100)
  if(val>=100)return "Daily limit is reached"
  else if(sent===0)return "No e-mails sent"
  else return `${val}%`
}
