def disjoint_set_of_digits(n):
    value = n
    if value==0:
        return 0
    
    while True:
        if len(list(set(list(str(value))) & set(list(str(n)))))==0:
            return value
            break
        value += 1
