from collections import Counter
def find_uniq(arr):
    return [k for k,v in Counter(arr).items() if v==1][0]
