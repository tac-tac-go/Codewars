import re
def reverse_letter(st):
    return re.sub(r'[^a-zA-Z]',"",st)[::-1]
