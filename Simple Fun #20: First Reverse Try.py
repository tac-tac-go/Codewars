def first_reverse_try(arr):
    if len(arr)==0:return []
    tmp = arr[0]
    arr[0] = arr[-1]
    arr[-1] = tmp
    return arr
