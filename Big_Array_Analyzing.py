def min_value_array(arr):
    import numpy as np
    return np.array(arr).min(axis=0).tolist()
