def min_sum(arr):
    arr_s = sorted(arr)
    return sum([arr_s[i]*arr_s[-(i+1)] for i in range(len(arr)//2)])
