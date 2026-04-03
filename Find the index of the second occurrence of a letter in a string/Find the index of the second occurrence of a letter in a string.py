def second_symbol(s, symbol):
    filterd = [i for i,v in enumerate(s) if v==symbol]
    return filterd[1] if len(filterd)>1 else -1
