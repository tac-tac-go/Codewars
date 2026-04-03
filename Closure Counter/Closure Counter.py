def counter():
    count = 0
    def plus():
        nonlocal count
        count+=1
        return count
    return plus

