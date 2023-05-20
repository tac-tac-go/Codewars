def pythagorean_triple(integers):
    integers = sorted(integers)
    max_not = integers[:-1]
    max_v = integers[-1]
    return True if sum(list(map(lambda x:x**2,max_not)))==max_v**2 else False
    

