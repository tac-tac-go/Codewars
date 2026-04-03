import numpy as np
def max_product(a):
    arr = np.sort(a)[::-1]
    return arr[0]*arr[1]
