from collections import defaultdict
def duplicates(arr):
    d = defaultdict(int)
    result = []
    for i in arr:
        d[i]+=1
        if d[i]==2:
            result.append(i)
    return result
