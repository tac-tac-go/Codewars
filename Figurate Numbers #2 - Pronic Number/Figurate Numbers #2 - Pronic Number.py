def is_pronic(n):
    if n%2!=0 or n<0:
        return False
    else:
        if n==0 or n==2:
            return True
        for i in range(2,n//2):
            if i*(i+1)==n:
                return True
        return False
