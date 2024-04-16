def is_divisible(*args):
    return all([args[0]%i==0 for i in args[1:]])
