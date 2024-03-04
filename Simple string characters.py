import re
def solve(s):
    a = len(re.findall('[A-Z]',s))
    b = len(re.findall('[a-z]',s))
    c = len(re.findall('[0-9]',s))
    d = len(re.findall('[^0-9a-zA-Z]',s))
    return [a,b,c,d]
    
