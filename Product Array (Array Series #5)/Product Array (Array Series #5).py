from functools import reduce
def product_array(numbers):
    return [reduce(lambda a,b:a*b,(numbers[:i]+numbers[i+1:])) for i in range(len(numbers))]
