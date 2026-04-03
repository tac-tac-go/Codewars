def spot_diff(s1, s2):
    return [i for i,(v1,v2) in enumerate(zip(s1,s2)) if v1!=v2]
