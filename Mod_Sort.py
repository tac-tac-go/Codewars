def mod_sort(int_list, n):
    dict_r = []
    for i in int_list:
        dict_r.append([i,i%n])
    return [i[0] for i in sorted(dict_r,key=lambda x:(x[1],-x[0]))]
    
