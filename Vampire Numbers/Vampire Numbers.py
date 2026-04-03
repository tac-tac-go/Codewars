def vampire_test(x, y):
    if x<0 and y<0:return False
    return sorted(str(abs(x*y))) == sorted(str(abs(x))+str(abs(y)))
