def sc(s):
    return sum([5 for i in range(0,len(s)-1) if s[i]!=s[i+1]])+len(s)*2-1
