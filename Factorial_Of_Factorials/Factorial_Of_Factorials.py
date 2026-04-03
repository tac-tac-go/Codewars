def fof(n):
    import math
    result = 1
    for i in range(n,0,-1):
        result *= math.factorial(i)
    return result
    
        
