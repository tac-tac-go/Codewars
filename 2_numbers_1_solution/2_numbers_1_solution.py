def get_op(num1, num2, target):
    if num1+num2==target:
        return "add"
    elif abs(num1-num2)==abs(target):
        return "subtract"
    elif num1*num2==target:
        return "multiply"
    else:
        return "divide"
