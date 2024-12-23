from collections import defaultdict
def duplicate_sandwich(arr):
    d = defaultdict(int)
    for i,v in enumerate(arr):
        d[v]+=1
        if d[v]==2:
            return arr[arr.index(v)+1:i]
