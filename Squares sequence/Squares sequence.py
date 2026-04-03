def squares(x, n):
    square = 1
    result = []
    for i in range(1,n+1):
        result.append(x**square)
        square*=2
    return result
