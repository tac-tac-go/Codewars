function calc(x){
  //your code here
  return String(x).split("").map(v => parseInt(v)).reduce((a,b)=>a+b,0)*x-parseInt(String(x).split("").reverse().join(""))
}
