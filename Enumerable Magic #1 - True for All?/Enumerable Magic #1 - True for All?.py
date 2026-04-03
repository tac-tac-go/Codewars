def _all(seq, fun): 
    return True if len(list(filter(fun,seq)))==len(seq) else False
