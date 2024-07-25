def get_average(lst): 
    return round(sum([dic["age"] for dic in lst])/len(lst))
