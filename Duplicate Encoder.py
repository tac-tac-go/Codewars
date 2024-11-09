from collections import Counter
def duplicate_encode(word):
    word = word.lower()
    arr = Counter(list(word))
    arr_c = {i:"(" if j==1 else ")" for i,j in arr.items()}
    return "".join([arr_c[i] for i in word])
    
