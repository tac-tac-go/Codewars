import string
def name_value(my_list):
    result = []
    for i1,v1 in enumerate(my_list):
        tmp = []
        for v2 in v1:
            alpha = string.ascii_lowercase
            if v2 in alpha:
                tmp.append((alpha.index(v2)+1)*(i1+1))
        result.append(sum(tmp))
    return result
