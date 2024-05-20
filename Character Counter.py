from collections import Counter
def validate_word(word):
    arr = Counter(list(word.upper())).values()
    return len(set(arr))==1
