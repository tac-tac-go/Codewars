def solve(a):
    return sum(1 if int(i)%2==0 else -1 for i in a if isinstance(i,int))
