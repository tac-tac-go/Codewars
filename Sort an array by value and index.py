def sort_by_value_and_index(arr):
    result = sorted([[arr[i]*(i+1),arr[i]] for i in range(len(arr))],key=lambda x:x[0])
    return [j[1] for j in result]
