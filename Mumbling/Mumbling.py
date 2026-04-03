def accum(s):
    return "-".join([(v*(i+1)).capitalize() for i,v in enumerate(list(s))])
    
