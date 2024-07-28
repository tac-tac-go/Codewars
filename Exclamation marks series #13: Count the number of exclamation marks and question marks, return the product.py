import re
def product(st):
    return len(tuple(re.findall("!",st)))*len(tuple(re.findall("\?",st)))
