def capital(capitals): 
    result = []
    for dic in capitals:
        tmp = []
        for v in dic.values():
            tmp.append(v)
        result.append(f'The capital of {tmp[0]} is {tmp[1]}')
    return result
