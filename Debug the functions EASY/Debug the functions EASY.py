from functools import reduce
def multi(l_st):
    return reduce(lambda a,b:a*b,l_st)
def add(l_st):
    return reduce(lambda a,b:a+b,l_st)
def reverse(string):
    return string[::-1]
