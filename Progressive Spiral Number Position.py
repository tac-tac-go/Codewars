def layers(n):
    p = 1
    count = 1
    while p*p < n:
        p+=2
        count+=1
    return count
