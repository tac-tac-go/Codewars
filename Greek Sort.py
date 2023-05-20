def greek_comparator(lhs, rhs):
    idx_l = greek_alphabet.index(lhs)
    idx_r = greek_alphabet.index(rhs)
    if idx_l < idx_r:
        return -1
    elif idx_l > idx_r:
        return 1
    else:
        return 0
