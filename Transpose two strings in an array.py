from itertools import zip_longest
def transpose_two_strings(arr):
    return "\n".join(f"{a} {b}" for a, b in zip_longest(*arr, fillvalue=" "))
