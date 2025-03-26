function sign(number){
  if(isNaN(Number(number)))return NaN
  if(Number(number)>0)return 1
  else if(Number(number)<0)return -1
  else return 0
}
