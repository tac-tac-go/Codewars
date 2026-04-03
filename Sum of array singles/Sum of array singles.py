from collections import Counter
def repeats(arr):
    return sum([i for i,j in Counter(arr).items() if j==1])
