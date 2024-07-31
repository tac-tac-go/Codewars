def find_e(s):
    if s is None:
        return None
    s2 = s.lower()
    if len(s2)==0:
        return ""
    if "e" in s2:
        return str(s2.count("e"))
    else:
        return 'There is no "e".'
