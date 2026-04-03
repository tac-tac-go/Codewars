from collections import defaultdict
def combine(*args):
    result = defaultdict(int)
    for arg in args:
        for i,j in arg.items():
            result[i]+=j
    return result
    
