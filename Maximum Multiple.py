def max_multiple(divisor, bound):
    return list(filter(lambda x:x%divisor==0,range(bound,0,-1)))[0]
