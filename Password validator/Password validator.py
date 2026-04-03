import re
def password(st):
    return re.search(r'^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$',st) is not None
