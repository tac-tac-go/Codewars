def last(*args):
    if type(args[0])==list or type(args[0])==str:
        return args[-1][-1]
    else:
        return args[-1]
    
        
