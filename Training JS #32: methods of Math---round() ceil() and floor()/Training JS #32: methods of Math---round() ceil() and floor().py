import math
def round_it(n):
    n_c = str(n).split(".")
    if len(n_c[0])<len(n_c[1]):
        return math.ceil(n)
    elif len(n_c[0])>len(n_c[1]):
        return math.floor(n)
    else:
        return round(n)
