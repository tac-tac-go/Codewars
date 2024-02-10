def sum_triangular_numbers(n):
    return sum([(i*(i-1))/2 for i in range(2,n+2)])
