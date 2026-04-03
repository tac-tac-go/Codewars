import re
def filter_string(st):
    return int("".join(re.findall('\d',st)))
