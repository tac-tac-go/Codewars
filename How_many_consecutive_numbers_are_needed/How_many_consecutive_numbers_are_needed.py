def consecutive(arr):
    #your code here
    if len(arr)==0:
        return 0
    return len(range(max(arr)-min(arr)+1))-len(arr)
