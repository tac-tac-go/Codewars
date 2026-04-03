def calc(arr):
    arr = [v**2 if v>0 else v for v in arr]
    arr = [v*3 if (i+1)%3==0 else v for i,v in enumerate(arr)]
    arr = [v*-1 if (i+1)%5==0 else v for i,v in enumerate(arr) ]
    return sum(arr)
