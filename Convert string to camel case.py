import re
def to_camel_case(text):
    return "".join([tmp.title() if i!=0 else tmp for i,tmp in enumerate(re.split("[_-]",text))])
