from collections import Counter
def stanton_measure(arr):
    occ = arr.count(1)
    return dict(Counter(arr))[occ]

