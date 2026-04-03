def animals(heads, legs):
    import numpy as np
    left = [[1, 1],
            [2, 4]]
    right = [heads, legs]
    l_a,r_a = np.linalg.solve(left, right)
    if (l_a%1==0 and r_a%1==0) and (l_a>=0 and r_a>=0):
        return int(l_a),int(r_a)
    else:
        return 'No solutions'
