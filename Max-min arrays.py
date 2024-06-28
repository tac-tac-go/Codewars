def solve(arr):
    sort_arr = sorted(arr)
    result = [[sort_arr[len(sort_arr)-1-i],sort_arr[i]] for i in range(len(sort_arr)//2)]
    if len(sort_arr)%2!=0:
        result.append([sort_arr[len(sort_arr)//2]])
    return sum(result,[])
    
        
        
