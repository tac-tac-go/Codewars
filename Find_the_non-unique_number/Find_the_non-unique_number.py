def non_unique(lst):
    if len(lst)==0:
        return []
    from collections import Counter
    lst_c = dict(Counter(map(float,lst)))
    result = 'unique';
    for key,value in lst_c.items():
        if value!=1:
            return [float(key),int(value)]
    return result
