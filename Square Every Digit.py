def square_digits(num):
    return int("".join(list(map(lambda x:str(x**2),map(int,list(str(num)))))))
