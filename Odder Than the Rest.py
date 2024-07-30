def odd_one(arr):
    for i,v in enumerate(arr):
        if abs(v%2)==1:
            return i
    return -1
