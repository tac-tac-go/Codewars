def is_lucky(n):
    result = sum([int(i) for i in list(str(n))])
    return result==0 or result%9==0
