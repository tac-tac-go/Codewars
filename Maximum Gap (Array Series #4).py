def max_gap(numbers):
    arr = sorted(numbers)
    return max([arr[i+1]-arr[i] for i in range(len(arr)-1)])
