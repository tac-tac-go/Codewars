function add(num1, num2) {
  num1 = String(num1).padStart(Math.max(String(num1).length,String(num2).length),"0")
  num2 = String(num2).padStart(Math.max(String(num1).length,String(num2).length),"0")
  return Number(num1.split("").map((v,i) => String(Number(num1[i])+Number(num2[i]))).join(""))
}
