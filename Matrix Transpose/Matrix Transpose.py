import numpy as np
def transpose(matrix):
    arr = np.array(matrix)
    r,c = arr.shape
    return arr.T.reshape((c,r)).tolist()
