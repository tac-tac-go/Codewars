import re
def solve(s):
    result = [len(i) for i in re.findall('[aiueo]+',s)]
    return max(result) if len(result)>0 else 0
