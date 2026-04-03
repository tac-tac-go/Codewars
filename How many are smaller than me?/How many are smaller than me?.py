def smaller(arr):
    return [len(list(filter(lambda x:x<arr[i],arr[i+1:]))) for i in range(len(arr))]
