def divisible_by_three(st): 
    result = sum(map(int,list(st)))
    while result>0:
        result -= 3
    return result==0
