def mean(lst):
    filterd_n = [int(i) for i in lst if i.isdigit()]
    filterd_s = [i for i in lst if not(i.isdigit())]
    return [sum(filterd_n)/len(filterd_n),"".join(filterd_s)]
    
