import math
def reduce_fraction(frac):
    gcd = math.gcd(frac[0],frac[1])
    return (frac[0]/gcd,frac[1]/gcd)
