def triple_x(s):
    for i in range(len(s)):
        if s[i] in "x":
            if s[i:i+3]=="xxx":
                return True
            else:
                return False
    return False
