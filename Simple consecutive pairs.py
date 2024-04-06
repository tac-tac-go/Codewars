def pairs(arr):
    return sum([1 for i in range(0,len(arr)-1,2) if abs(arr[i]-arr[i+1])==1])
