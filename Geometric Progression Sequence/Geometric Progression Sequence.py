def geometric_sequence_elements(a, r, n):
    result = []
    for i in range(1,n+1):
        result.append(str(a))
        a*=r
    return ", ".join(result)
