def consecutive(arr, a, b):
    for i in range(len(arr)-1):
        if arr[i]==a:
            if arr[i+1]==b:
                return True
        elif arr[i]==b:
            if arr[i+1]==a:
                return True
    return False
            
        
        
