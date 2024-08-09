def number_joy(n):
    harshad = sum([int(i) for i in str(n)])
    if n%harshad==0 and harshad*int(str(harshad)[::-1])==n:
        return True
    return False
    
