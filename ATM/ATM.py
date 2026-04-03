def solve(n):
    c1,r1 = divmod(n,500)
    c2,r2 = divmod(r1,200)
    c3,r3 = divmod(r2,100)
    c4,r4 = divmod(r3,50)
    c5,r5 = divmod(r4,20)
    c6,r6 = divmod(r5,10)
    return -1 if r6>0 else c1+c2+c3+c4+c5+c6
