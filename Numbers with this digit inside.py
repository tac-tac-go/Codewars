from functools import reduce
def numbers_with_digit_inside(x, d):
    result = [i for i in range(1,x+1) if str(d) in str(i)]
    mul = 0 if len(result)==0 else reduce(lambda x1,x2:x1*x2,result)
    return [len(result),sum(result),mul]
