const abundantNumber = (num) => {
  return Array.from({length:num},(_,i) => i+1).filter(v => num%v==0 && v<num).reduce((a,b) => a+b,0)>num
}
