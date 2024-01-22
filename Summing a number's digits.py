def sum_digits(number):
    return sum([int(i) for i in list(str(abs(number)))])
