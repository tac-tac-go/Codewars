def first_non_consecutive(arr):
    index = arr[0]
    for i in range(1,len(arr)):
        if index+1 == arr[i]:
            index =arr[i]
            continue
        else:
            return arr[i]
    return None
