def capitals(word):
    return [i for i,j in enumerate(list(word)) if j.upper()==j]
