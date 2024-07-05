def powerof4(n):
    if type(n)==int:
        while n%4==0:
            n/=4
        return n==1
    else:
        return False
