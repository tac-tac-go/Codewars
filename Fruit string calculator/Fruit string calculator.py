import re
def calculate(strng):
    return eval(re.sub(r"[a-zA-Z\s]","",strng.replace("loses","-").replace("gains","+")))
