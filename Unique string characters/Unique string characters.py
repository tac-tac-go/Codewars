def solve(a,b):
    result = ""
    for i in a+b:
        if (i not in list(set(a) & set(b))):
            result += i
    return result
