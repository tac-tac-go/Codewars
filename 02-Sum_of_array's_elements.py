def sum1(array):
    return sum([i*array[i-1] for i in range(1,len(array)+1)])
