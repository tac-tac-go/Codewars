from functools import reduce
def sum_or_product(array, n):
    arr_s = sorted(array)
    ln = reduce(lambda a,b:a+b,arr_s[-n:])
    sn = reduce(lambda a,b:a*b,arr_s[:n])
    if ln>sn:
        return "sum"
    elif ln<sn:
        return "product"
    else:
        return "same"
    
    
