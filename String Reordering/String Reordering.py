def sentence(lst):
    dic = {}
    for dic_i in lst:
        dic.update(dic_i)
    dic = {int(key):value for key,value in dic.items()}
    return " ".join([item[1] for item in sorted(dic.items(),key=lambda x:x[0])])
