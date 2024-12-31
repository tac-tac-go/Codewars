import re
def hex_hash(code):
    tmp = "".join(['{:x}'.format(ord(s)) for s in code])
    return sum([int(i) for i in list(str(re.sub(r'[a-z]',"",tmp)))])
