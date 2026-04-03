from functools import reduce
def max_tri_sum(numbers):
    return reduce(lambda x,y:x+y,sorted(set(numbers))[-3:])
