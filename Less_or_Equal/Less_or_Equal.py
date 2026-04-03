def less_equal(arr,k):
    res = [1] + sorted(arr)    
    return res[k] if len(arr) == k or res[k] != res[k + 1] else -1
