import math
def consecutive_ducks(n):
    return not(math.log2(n)%1==0)
