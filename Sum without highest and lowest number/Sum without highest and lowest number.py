def sum_array(arr):
    if arr==None or len(arr)==0:
        return 0
    arr = sorted(arr)
    return sum(arr[1:-1])
