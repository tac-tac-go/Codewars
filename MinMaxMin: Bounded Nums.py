def min_min_max(arr):
    arr_s = sorted(arr)
    filtered = [i for i in range(arr_s[0],arr_s[-1]) if i not in arr_s]
    return [arr_s[0],filtered[0],arr_s[-1]]
