from functools import reduce
def reverse(lst):
    return reduce(lambda a,b:[b]+a,lst,list(set()))
    
