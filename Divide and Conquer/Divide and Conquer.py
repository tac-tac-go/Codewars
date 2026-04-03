def div_con(x):
    count=0
    for i in x:
        if isinstance(i,int):
            count+=i
        else:
            count-=int(i)
    return count
    
