def bin_rota(arr):
    result = []
    for i in range(len(arr)):
        if i%2==0:
            result.extend(arr[i])
        else:
            result.extend(arr[i][::-1])
    return result
