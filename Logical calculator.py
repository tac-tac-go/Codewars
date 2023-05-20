from functools import reduce
def logical_calc(array, op):
    op = " and "  if op=="AND" else " or " if op=="OR" else " ^ "
    return reduce(lambda a,b:eval(str(a) + op + str(b)) ,array)
    
