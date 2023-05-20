def alternate_sq_sum(arr):
    return sum([v**2 if (i+1)%2==0 else v for i,v in enumerate(arr)])


