def tidyNumber(n):
    arr = list(map(int,list(str(n))))
    return all([arr[i]>=arr[i-1] for i in range(1,len(arr))])
