def sum_of_differences(arr):
    arr = sorted(arr)[::-1]
    print(arr)
    return 0 if len(arr)<=1 else sum([arr[i-1]-arr[i] for i in range(1,len(arr))])
