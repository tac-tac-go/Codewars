import re
def disemvowel(string_):
    return re.sub("[aiueo]","",string_,flags=re.I)
