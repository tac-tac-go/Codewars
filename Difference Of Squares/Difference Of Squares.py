def difference_of_squares(n):
    square_of_sum = sum([i for i in range(1,n+1)])
    square_of_sum*=square_of_sum
    sum_of_square = sum([i**2 for i in range(1,n+1)])
    return square_of_sum - sum_of_square

