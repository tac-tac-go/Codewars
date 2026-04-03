def array_madness(a,b):
    return sum(list(map(lambda x:x**2,a))) > sum(list(map(lambda x:x**3,b)))
