def even_or_odd(s):
    odd = sum([int(i) for i in s if int(i)%2==1])
    even = sum([int(i) for i in s if int(i)%2==0])
    if odd==even:
        return 'Even and Odd are the same'
    elif odd>even:
        return 'Odd is greater than Even'
    else:
        return 'Even is greater than Odd'
