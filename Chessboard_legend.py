def grains(n):
    count = 1
    result = 0
    for i in range(n):
        for j in range(n):
            result += count
            count*=2
    return result
            
    
