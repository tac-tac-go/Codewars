def get_length_of_missing_array(array_of_arrays):
    
    arr_l = []
    for tmp in array_of_arrays:
        if not tmp:
            return 0
        arr_l.append(len(tmp))
    
    if not arr_l:
        return 0
    
    min_v = min(arr_l)
    max_v = max(arr_l)
    for i in range(min_v,max_v+1):
        if i not in arr_l:
