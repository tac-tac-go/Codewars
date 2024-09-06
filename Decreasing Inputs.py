def add(*args):
    return round(sum([(v/(i+1)) for i,v in enumerate(args)]))
