from collections import Counter
def missing_values(seq): 
    x,y =0,0
    for k,v in Counter(seq).items():
        if v==1:
            x=k
        if v==2:
            y=k
    return x*x*y
