def find_squares(num):
    number = 0
    while num!=abs((number**2)-((number-1)**2)):
        number +=1
    return "{}-{}".format(number**2,(number-1)**2)
