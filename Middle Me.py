def middle_me(N, X, Y): 
    m = N//2
    return Y*m+X+Y*m if N%2==0 else X
