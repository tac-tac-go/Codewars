import numpy as np
def arr_adder(arr):
    arr_n = np.array(arr)
    return " ".join(["".join(arr_n[:,i]) for i in range(len(arr[0]))])
