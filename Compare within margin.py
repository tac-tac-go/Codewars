def close_compare(*args):
    a,b,margin = args[0],args[1],0
    if len(args)==2:
        return -1 if a < b else 1 if a > b else 0
    else:
        margin = args[2]
        dis = abs(a-b)
        if dis <= margin:
            return 0
        else:
            return -1 if a < b else 1 if a > b else 0
        
