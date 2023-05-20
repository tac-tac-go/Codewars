def halving_sum(n): 
    index = 1
    result = 0
    while True:
        if n//(index)<1:
            break
        result += n//(index)
        index*=2
    return result
    
