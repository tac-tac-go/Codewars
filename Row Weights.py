def row_weights(array):
    result = [0]*2
    for i,j in enumerate(array):
        if i%2==0:
            result[0]+=j
        else:
            result[1]+=j
    return tuple(result)
