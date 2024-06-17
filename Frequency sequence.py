from collections import Counter
def freq_seq(s, sep):
    dic = dict(Counter(list(s)))
    return f"{sep}".join([str(dic[i]) for i in s])

