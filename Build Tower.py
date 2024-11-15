def tower_builder(n_floors):
    result = []
    for i in range(n_floors):
        tmp = ("*"*(2*(i+1)-1)).center(2*n_floors-1," ")
        result.append(tmp)
    return result
