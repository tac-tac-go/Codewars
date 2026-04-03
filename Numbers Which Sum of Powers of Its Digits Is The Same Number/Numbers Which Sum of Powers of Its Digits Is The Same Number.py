def eq_sum_powdig(hMax, exp):
    # your code here
    result = []
    for i in range(2,hMax+1):
        if sum(map(lambda x:x**exp,map(int,list(str(i)))))==i:
            result.append(i)
    return result
