flatten=lambda l: sum(map(flatten,l),[]) if isinstance(l,list) else [l]
def sum_nested(lst):
    return sum(flatten(lst))
