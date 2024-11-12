def in_array(array1, array2):
    return sorted(set([tmp1 for tmp1 in array1 for tmp2 in array2 if tmp1 in tmp2 ]))
