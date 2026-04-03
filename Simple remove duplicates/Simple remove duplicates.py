def solve(arr): 
    result = []
    for i in arr[::-1]:
        if i not in result:
            result.append(i)
    return result[::-1]
            
