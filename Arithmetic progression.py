def arithmetic_sequence_elements(a, d, n):
    now = a
    count = 0
    result = []
    while count < n:
        result.append(str(now))
        now+=d
        count+=1
    return ", ".join(result)
