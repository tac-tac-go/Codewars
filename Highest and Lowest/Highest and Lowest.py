def high_and_low(numbers):
    array = list(map(int,numbers.split(" ")))
    return str(max(array))+" "+str(min(array))
