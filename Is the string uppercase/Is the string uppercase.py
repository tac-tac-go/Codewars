def is_uppercase(inp):
    return True if len([i for i in inp if i.islower()])==0 else False
