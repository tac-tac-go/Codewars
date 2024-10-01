def median(array):
    arr_s = sorted(array)
    if len(arr_s)%2==0:
        return (arr_s[len(arr_s)//2]+arr_s[len(arr_s)//2-1])/2
    else:
        return arr_s[len(arr_s)//2]
