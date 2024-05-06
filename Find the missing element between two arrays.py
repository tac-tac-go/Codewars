def find_missing(arr1, arr2):
    arr1 = sorted(arr1)
    arr2 = sorted(arr2)
    for i,j in zip(arr1,arr2):
        if i!=j:
            return i
    if len(arr1)>len(arr2):return arr1[-1]
    else:return arr2[-1]
        
        
    
