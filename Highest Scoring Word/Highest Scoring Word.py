import string
def high(x):
    result = {}
    for s1 in x.split(" "):
        tmp = []
        for s2 in s1:
            tmp.append(string.ascii_lowercase.index(s2)+1)
        result[s1]=sum(tmp)
    return sorted(result.items(),key=lambda x:-x[1])[0][0]
            
    
