def solve(a):
    even = 0
    odd = 0
    for i in a:
        if isinstance(i,int):
            if int(i)%2==0:
                even+=1
            else:
                odd+=1
    return even-odd
