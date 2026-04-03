from collections import Counter
def dominator(arr):
    freq = sorted(Counter(arr).items(),key=lambda x:-x[1])
    return freq[0][0] if len(arr)>0 and freq[0][1]>len(arr)//2 else -1
