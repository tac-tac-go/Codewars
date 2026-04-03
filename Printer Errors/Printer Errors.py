import re
def printer_error(s):
    result = len(re.findall(r'[n-z]',s))
    return "{}/{}".format(result,len(s))
