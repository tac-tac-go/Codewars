import numpy as np
def avg_array(arrs):
    arr_n = np.array(arrs)
    return arr_n.mean(axis=0)
