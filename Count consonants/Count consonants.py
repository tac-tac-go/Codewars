def consonant_count(s):
    return sum([1 for i in list(s.replace(" ","")) if (i.lower() not in "aiueo") and (i.isalpha())])
