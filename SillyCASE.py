def sillycase(s):
    mid = len(s)//2
    if len(s)%2:
        return s[:mid+1].lower() + s[mid+1:].upper()
    else:
        return s[:mid].lower() + s[mid:].upper()
