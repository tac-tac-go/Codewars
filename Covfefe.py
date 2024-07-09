import re
def covfefe(s):
    if "coverage" in s:
        return re.sub("coverage","covfefe",s)
    else:
        return s + " covfefe"
