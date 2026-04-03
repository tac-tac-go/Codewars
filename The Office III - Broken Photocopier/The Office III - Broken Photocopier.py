def broken(inp):
    return "".join([str(int(not(int(i)))) for i in inp])
