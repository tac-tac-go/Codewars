def remove_smallest(numbers):
    numbers2 = numbers[:]
    if len(numbers2)==0:return []
    del numbers2[numbers2.index(min(numbers2))]
    return numbers2
