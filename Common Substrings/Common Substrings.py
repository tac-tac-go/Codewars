def substring_test(s1, s2):
    s1 = s1.lower()
    s2 = s2.lower()
    return sum([1 for i in range(0,len(s1)-1) if s1[i:i+2] in s2])>0
