from itertools import zip_longest
def transpose_two_strings(arr):
    result = []
    for i,j in zip_longest(arr[0],arr[1]):
        tmp = ""
        if i is None:
            tmp+=" "
        else:
            tmp+=i
        tmp+=" "
        if j is None:
            tmp+=" "
        else:
            tmp+=j
        result.append(tmp)
    return "\n".join(result)
        
        
