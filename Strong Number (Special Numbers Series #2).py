import math
def strong_num(number):
    return "STRONG!!!!" if sum([math.factorial(int(i)) for i in list(str(number))])==number else "Not Strong !!"
