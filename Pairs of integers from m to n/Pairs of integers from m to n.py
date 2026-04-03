def generate_pairs(m, n):
    return [(i,j) for i in range(m,n+1) for j in range(i,n+1)]
