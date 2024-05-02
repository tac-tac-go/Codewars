def paint_letterboxes(start, finish):
    result = [0]*10
    for i in range(start,finish+1):
        for j in list(str(i)):
            result[int(j)]+=1
    return result
