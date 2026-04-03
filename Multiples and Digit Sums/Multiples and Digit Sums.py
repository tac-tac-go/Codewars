def procedure(i):
    return sum([sum(map(lambda x:int(x),list(str(j)))) for j in range(i,101,i)])
