import re
def solve(s:str) -> int:
    return max([int(i) for i in re.split("[a-z]+",s) if len(i)>0])
