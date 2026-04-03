import math
def sum_average(arr):
    ave = sum([sum(i)/len(i) for i in arr])
    return math.floor(ave)
