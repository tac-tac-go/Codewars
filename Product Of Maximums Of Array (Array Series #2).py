from functools import reduce
def max_product(lst, n_largest_elements):
    return reduce(lambda a,b:a*b,sorted(lst)[::-1][:n_largest_elements])
