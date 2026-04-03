from collections import Counter
def stray(arr):
    return sorted(Counter(arr).items(),key=lambda x:x[1])[0][0]
