from collections import Counter
def get_socks(name, socks):
    if len(socks)==0:return []
    print(name,socks)
    if name=='Punky':
        set_a = list(set(socks))
        if len(socks)>=2 and len(set_a)>1:
            return [set_a[0],set_a[1]]
        else:
            return []
    else:
        arr = Counter(socks)
        c,n = sorted(arr.items(),key=lambda x:-x[1])[0]
        return  [c]*2  if n>=2 else []
