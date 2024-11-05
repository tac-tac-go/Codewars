from collections import defaultdict
def find_it(seq):
    lst = defaultdict(int)
    for i in seq:
        lst[i]+=1
    return [i for i,j in lst.items() if j%2==1][0]

