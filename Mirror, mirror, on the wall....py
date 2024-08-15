def mirror(data: list) -> list:
    if len(data)==0:return []
    arr_s = sorted(data)[::-1]
    result = [arr_s[0]]
    for i in arr_s[1:]:
        result.insert(0,i)
        result.insert(len(result)+1,i)
    return result

