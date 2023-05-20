import numbers
def calculator(x,y,op):
    if op in ["+","-","*","/"]:
        if isinstance(x, numbers.Number) and isinstance(y, numbers.Number):
            return eval(str(x)+op+str(y))
        else:
            return 'unknown value'
    else:
        return 'unknown value'
