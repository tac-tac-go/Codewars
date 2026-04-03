import string,re
def solve(s):
    sum_v = lambda x: list(s)
    return max([sum([string.ascii_lowercase.index(tmp2)+1 for tmp2 in list(tmp)])  if len(s)>0 else 0 for tmp in re.split(r"[aiueo]",s)])
