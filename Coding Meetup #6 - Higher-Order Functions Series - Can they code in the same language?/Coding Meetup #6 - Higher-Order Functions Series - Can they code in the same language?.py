def is_same_language(lst):
    return len(list(set([l['language'] for l in lst])))==1
