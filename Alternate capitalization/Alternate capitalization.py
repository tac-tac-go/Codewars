def capitalize(s):
    return ["".join([j.upper() if i%2==0 else j.lower() for i,j in enumerate(s)]),"".join([j.lower() if i%2==0 else j.upper() for i,j in enumerate(s)])]
