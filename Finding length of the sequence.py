def length_of_sequence(arr,n):
    arr_g = [i for i,j in enumerate(arr) if j==n]
    return 0 if len(arr_g)!=2 else arr_g[1]-arr_g[0]+1
