def scramble(strng, array):
    dic = {j:i for i,j in zip(strng,array)}
    return "".join([i[1] for i in sorted(dic.items(),key=lambda x:x[0])])
