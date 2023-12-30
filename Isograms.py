from collections import Counter
def is_isogram(string):
    return len(list(filter(lambda x:x>1,Counter(list(string.lower())).values())))==0
