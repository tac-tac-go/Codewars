def get_real_floor(n):
    print(n)
    if n==1:
        return 0
    elif n>13:
        return n-2
    elif n>0:
        return n-1
    else:
        return n
