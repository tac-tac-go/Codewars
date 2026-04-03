def count_positives_sum_negatives(arr):
    val1 = len(list(filter(lambda x:x>0,arr)))
    val2 = sum(list(filter(lambda x:x<0,arr)))
    return [] if len(arr)==0 else [val1,val2]
    
