from collections import Counter
def highest_rank(arr):
    arr_c = Counter(arr)
    return sorted(arr_c.items(),key=lambda x:(-x[1],-x[0]))[0][0]
