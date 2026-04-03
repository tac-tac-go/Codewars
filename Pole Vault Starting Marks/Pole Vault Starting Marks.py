def starting_mark(height):
    a = (10.67-9.45)/(1.83-1.52)
    b = 9.45 - (a*1.52)
    return round(a*height + b,2)
