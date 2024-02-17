from collections import defaultdict
def ordered_count(inp):
    dic = defaultdict(int)
    for i in list(inp):
        dic[i]+=1
    return list(dic.items())
