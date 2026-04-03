import re
def nothing_special(st):
    return "Not a string!" if type(st)!=str else re.sub('[^a-z0-9\s]',"",st,flags=re.I)
