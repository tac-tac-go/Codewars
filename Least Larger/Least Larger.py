def least_larger(a, i): 
    filterd = [value for index,value in enumerate(a) if value>a[i]]
    return  a.index(min(filterd)) if len(filterd)>0 else -1
