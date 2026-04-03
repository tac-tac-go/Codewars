def base_finder(seq):
    seq = sorted(map(int,seq))
    seq_s = sorted(set([s[-1] for s in list(map(str,seq)) if s[-1] not in ['0','1']]))
    return next(s for s in range(2,11) if str(s) not in seq_s)
