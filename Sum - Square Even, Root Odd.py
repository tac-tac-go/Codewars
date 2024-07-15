def sum_square_even_root_odd(nums):
    return round(sum([i**2 if i%2==0 else i**0.5 for i in nums]),2)

