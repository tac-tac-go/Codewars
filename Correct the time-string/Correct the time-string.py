import re
def time_correct(t):
    if t=="":
        return ""
    if t is None:
        return None
    if re.match("[0-9]{2}:[0-9]{2}:[0-9]{2}",t) is None:
        return None
    h,m,s = t.split(":")
    s1,s2 = divmod(int(s),60)
    m1,m2 = divmod(int(m)+s1,60)
    h1,h2 = divmod(int(h)+m1,24)
    return "{:02}:{:02}:{:02}".format(h2,m2,s2)
