function dotCalculator(equation) {
    const [op1,eq,op2] = equation.split(" ")
    if(eq==='+'){
      return op1+op2
    }else if(eq==='-'){
      return op1.slice(0,op1.length-op2.length)
    }else if(eq==='*'){
      return op1.repeat(op2.length)
    }else if(eq==='//'){
      return op1.slice(0,Math.floor(op1.length/op2.length))
    }
}
