function holidayCount (a1, a2){
  const num1 = a1.filter(v => Number.isInteger(v))[0]
  const num2 = a2.filter(v => Number.isInteger(v))[0]
  if(num1 && num2){
    if(num1 > num2)return "Right"
    else if(num1 < num2)return "Wrong"
    else return "Same"
  }else{
    return 'Not possible'
  }
}
