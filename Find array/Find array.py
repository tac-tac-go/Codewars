def find_array(arr1, arr2):
    if len(arr1)==0 or len(arr2)==0:return []
    return [arr1[i] for i in arr2 if i+1<=len(arr1)]
