def flick_switch(arr):
    check = True
    result = []
    for i in arr:
        if i == "flick":
            check = not check
            result.append(check)
        else:
            result.append(check)
    return result


