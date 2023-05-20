def match_words(acronym,words):
    result = {}
    for i in acronym:
        for j in words:
            if i==j[0]:
                result[i]=j
    return result
