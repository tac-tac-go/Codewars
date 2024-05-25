from collections import defaultdict
def create_dict(keys, values):
    d = defaultdict(int)
    for i,v in enumerate(keys):
        if i<len(values):
            d[v]=values[i]
        else:
            d[v]=None
    return dict(d)
    
    
