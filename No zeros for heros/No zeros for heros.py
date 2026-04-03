def no_boring_zeros(n):
    str1 = str(n).rstrip("0")
    return int(str1) if str1!="" else 0
