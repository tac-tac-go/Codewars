def no_space(x):
    import re
    whitespace = "\s"
    nospaces = re.sub(whitespace, "", x)
    return nospaces
