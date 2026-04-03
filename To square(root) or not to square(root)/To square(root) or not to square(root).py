def square_or_square_root(arr):
    return list(map(lambda x: int(x**0.5) if (x**0.5)%1==0 else x**2,arr))
