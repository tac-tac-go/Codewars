import re
def is_letter(s):
    if re.search('[a-zA-Z]',s):
        if len(s)==1:
            return True
    return False
