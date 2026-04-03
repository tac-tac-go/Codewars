def flatten(lst):
    result = []
    for i in lst:
        print(i)
        if isinstance(i, list):
            result.extend(i)
        else:
            result.append(i)
    return result
