def encrypt_this(text):
    if len(text)==0:return ""
    result = []
    for txt in text.split(" "):
        if len(txt)==1:
            result.append(str(ord(txt[0])))
        elif len(txt)==2:
            result.append(str(ord(txt[0]))+txt[1])
        else:
            result.append(str(ord(txt[0]))+txt[-1]+txt[2:-1]+txt[1])
    return " ".join(result)
