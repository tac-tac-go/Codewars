def filter_homogenous(arrays):
    final_result = []
    for array in arrays:
        result = []
        for v in array:
            result.append(type(v))
        result = list(set(result))
        if len(result)==1:
            final_result.append(array)
    return final_result
