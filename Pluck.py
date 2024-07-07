def pluck(objs, name): 
    result = []
    for obj in objs:
        flag = False
        for key,value in obj.items():
            if name==key:
                result.append(value)
                flag = True
        if not(flag):
            result.append(None)
    return result
