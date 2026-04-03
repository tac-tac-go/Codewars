def mxdiflg(a1, a2):
    return max([abs(len(i)-len(j)) for i in a1 for j in a2]+[-1])
