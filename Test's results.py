def test(r):
    dic = {'h':0,'a':0,'l':0}
    ave = 0
    for v in r:
        ave += v
        if v>=9:
            dic['h']+=1
        elif v>=7:
            dic['a']+=1
        else:
            dic['l']+=1
    result = [round(ave/len(r),3),dic]
    if dic['h']==len(r):
        result.append('They did well')
    return result
        
