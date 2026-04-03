def to_alternating_case(string):
    return "".join([i.lower() if i.isupper() else i.upper() for i in string ])

