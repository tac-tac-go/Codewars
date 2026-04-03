const digitMultiplication = (expr) => eval(expr.replace(/(\d)(?=\d)/g,"$1*"))
