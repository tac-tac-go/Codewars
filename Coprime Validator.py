def are_coprime(n,m):
    div1 = [i for i in range(1,n+1) if n%i==0]
    div2 = [i for i in range(1,m+1) if m%i==0]
    return list(set(div1) & set(div2))[-1]==1
