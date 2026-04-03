def digital_root(n):
    if len(str(n))==1:return n
    return digital_root(sum([int(i) for i in str(n)]))
