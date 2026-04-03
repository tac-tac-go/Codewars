from functools import reduce
def sum_factorial(lst):
    return sum([reduce(lambda a,b:a*b,range(1,v+1)) for v in lst])
