def archers_ready(archers):
    return len(archers)>0 and all([v>=5 for v in archers])
