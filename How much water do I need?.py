def how_much_water(L,X,N):
    if X>N:
        return 'Not enough clothes'
    if X*2 < N:
        return 'Too much clothes'
    return round(L*1.1**(N-X),2)
