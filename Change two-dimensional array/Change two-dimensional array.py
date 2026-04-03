def matrix(array): 
    for i in range(0,len(array)):
        for j in range(0,len(array)):
            if i==j:
                tmp = array[i][j]
                if tmp<0:
                    array[i][j]=0
                else:
                    array[i][j]=1
    return array
