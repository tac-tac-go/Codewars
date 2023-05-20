def eval_object(v):
    match v["operation"]:
        case "+":
            return eval(str(v["a"])+ "+" + str(v["b"]))
        case "-":
            return  eval(str(v["a"]) + "-" + str(v["b"]))
        case "/":
            return  eval(str(v["a"])+ "/"+ str(v["b"]))
        case "*":
            return  eval(str(v["a"])+ "*"+ str(v["b"]))
        case "%":
            return  eval(str(v["a"])+ "%"+ str(v["b"]))
        case "**":
            return  eval(str(v["a"])+ "**"+ str(v["b"]))
        case _:
            return 1
