def compare(s1, s2):
    s1 = s1 or ""
    s2 = s2 or ""
    s1 = s1 if all([str(i).isalpha() for i in s1]) else ""
    s2 = s2 if all([str(i).isalpha() for i in s2]) else ""
    s1_sum = sum([ord(i) for i in list(s1.upper())])
    s2_sum = sum([ord(i) for i in list(s2.upper())])
    return s1_sum==s2_sum
    
