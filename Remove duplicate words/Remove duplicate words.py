from collections import defaultdict
def remove_duplicate_words(s):
    count = defaultdict(int)
    for i in s.split(" "):
        count[i]+=1
    return " ".join(count.keys())
