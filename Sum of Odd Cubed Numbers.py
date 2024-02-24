def cube_odd(arr):
    total = 0
    for i in arr:
        if (type(i) != int):
            return None
        if i%2==1:
            total+=(i**3)
    return total

    
