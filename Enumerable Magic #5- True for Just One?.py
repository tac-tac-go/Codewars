def one(sq, fun): 
    return sum([1 for tmp in sq if fun(tmp)])==1
