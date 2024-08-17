import re
def area_code(text):
    m = re.search(r'\((\d+)\)',text)
    return m.group(0)[1:-1]
