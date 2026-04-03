function calculator(a,b,sign){
  if(["*","/","+","-"].includes(sign) && Number.isInteger(a) && Number.isInteger(b)){
    return eval(String(a)+sign+String(b))
  }else{
    return "unknown value"
  }

}
