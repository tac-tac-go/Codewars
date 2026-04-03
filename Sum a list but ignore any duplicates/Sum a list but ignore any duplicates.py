from collections import Counter
def sum_no_duplicates(l):
    return sum([key for key,value in Counter(l).items() if value==1])
    
