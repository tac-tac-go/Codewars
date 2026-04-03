import math
def area(d, l): 
    if d<=l:
        return "Not a rectangle"
    l2 = math.sqrt(d**2 - l**2)
    return round(l*l2,2)
