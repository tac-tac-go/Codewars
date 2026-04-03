function tripledouble(num1, num2) {
  for(let i=0;i<10;i++){
    if(String(num1).indexOf(String(i).repeat(3))!==-1 && String(num2).indexOf(String(i).repeat(2))!==-1)return 1
  }
  return 0
}
