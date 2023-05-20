def each_cons(lst, n):
    length = len(lst)-n+1
    return [lst[i:i+n] for i in range(length)]
