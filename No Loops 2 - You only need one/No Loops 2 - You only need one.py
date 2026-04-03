def check(a, x):  
    return False if len(list(filter(lambda y:y==x,a)))==0 else True
