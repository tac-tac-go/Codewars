def box(n):
    result = []
    for i in range(n):
        tmp = " "*n
        if (i+1)==1 or (i+1)==n:
            tmp = "-"*n
        else:
            tmp="-"+" "*(n-2)+"-"
        result.append(tmp)
    return result
    
