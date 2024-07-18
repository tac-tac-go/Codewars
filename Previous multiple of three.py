def prev_mult_of_three(n):
    while len(str(n))>1:
        if n%3==0:
            return n
        n = int(str(n)[:-1])
    return n if n%3==0 else None
