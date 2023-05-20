def first(*seq): 
    return seq[0][:seq[1]] if len(seq)==2 else seq[0][:1]
