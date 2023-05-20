def solve(s,g):
    import math
    result = -1
    for i in range(s-1,0,-1):
        if i+(s-i)==s and math.gcd(i,s-i)==g:
            result = (s-i,i)
            break
    return result
                
