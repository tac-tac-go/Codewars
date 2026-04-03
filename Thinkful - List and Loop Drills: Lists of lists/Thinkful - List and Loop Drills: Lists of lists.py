from functools import reduce
def process_data(data):
    return reduce(lambda a,b:a*b,[tmp[0]-tmp[1] for tmp in data])
