import numpy as np
def diagonal(matrix):
    matrix_n = np.array(matrix)
    matrix_nr = np.fliplr(matrix_n)
    result1 = sum([matrix_n[i,i] for i in range(len(matrix_n))])
    result2 = sum([matrix_nr[i,i] for i in range(len(matrix_n))])
    if result1==result2:
        return "Draw!"
    elif result1>result2:
        return "Principal Diagonal win!"
    else:
        return  "Secondary Diagonal win!"
    
        
