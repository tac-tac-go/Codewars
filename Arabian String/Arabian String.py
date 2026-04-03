import re
def camelize(str_):
    return "".join([tmp.capitalize() for tmp in list(filter(bool,re.split(r"[^0-9a-zA-Z]",str_)))])
