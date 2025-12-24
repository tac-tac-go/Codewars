const judge_ope = (op1, op2, result) => {
  const a = Number(op1), b = Number(op2), r = Number(result)
  if (a + b === r) return ["+"]
  if (a - b === r) return ["-"]
  if (a * b === r) return ["*"]
  if (b !== 0 && Math.floor(a / b) === r) return ["/"]
  return []
}


function sayMeOperations(str) {
  const arr = str.split(" ")
  const arr_r = []
  for(let i=2;i<arr.length;i++){
    const result = judge_ope(arr[i-2],arr[i-1],arr[i])[0]
    if(result==="+") arr_r.push("addition")
    else if(result==="-") arr_r.push("subtraction")
    else if(result==="*") arr_r.push("multiplication")
    else arr_r.push("division")
  }
  return arr_r.join(", ")
}
