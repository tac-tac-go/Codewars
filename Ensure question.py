def ensure_question(s):
    if len(s)==0:
        return "?"
    else:
        return s if s[-1]=="?" else s+"?"
