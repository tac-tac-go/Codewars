def save(sizes, hd): 
    count = 0
    sum_v = 0
    for i in range(len(sizes)):
        if sum_v+sizes[count]<=hd:
            sum_v += sizes[count]
            count+=1
        else:
            break
    return count
