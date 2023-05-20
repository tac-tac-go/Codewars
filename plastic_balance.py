def plastic_balance(lst):
    # Do some botato :)
    if len(lst)==1:
        return lst
    elif len(lst)==2:
        if lst[0]==lst[-1]:
            return []
        else:
            return lst
    
    while len(lst)>2:
        side = lst[0]+lst[-1]
        among = sum(lst[1:-1])
        if side==among:
            print(lst)
            return lst
        lst = lst[1:-1]

    return []
