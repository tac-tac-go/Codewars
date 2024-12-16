import numpy as np
def no_ifs_no_buts(a, b):
    sign = np.sign(a-b)
    match sign:
        case -1:
            return f'{a} is smaller than {b}'
        case 0:
            return f'{a} is equal to {b}'
        case 1:
            return f'{a} is greater than {b}'
