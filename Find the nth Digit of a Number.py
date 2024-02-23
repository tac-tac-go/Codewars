def find_digit(num, nth):
    num = abs(num)
    if len(str(num)) < nth:
        return 0
    if nth<=0:
        return -1
    return int(list(str(num))[::-1][nth-1])
