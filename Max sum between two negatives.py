def max_sum_between_two_negatives(arr):
    index = [i for i,v in enumerate(arr) if v<0]
    if len(index)<2:
        return -1
    val = max([sum(arr[index[i]+1:index[i+1]]) for i in range(len(index)-1)])
    return val
