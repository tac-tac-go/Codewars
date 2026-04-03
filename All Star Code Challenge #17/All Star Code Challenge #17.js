function findYear(month, dayOfWeek){
  for(let i=2014;i<=2050;i++){
    let day = new Date(i,month,1)
    if(day.getDay()===dayOfWeek){
      return i 
    }
  }
  return 0
}
