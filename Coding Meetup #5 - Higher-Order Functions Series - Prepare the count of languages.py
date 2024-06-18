from collections import Counter
def count_languages(lst): 
    return Counter([v['language'] for v in lst])
