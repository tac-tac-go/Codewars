from itertools import zip_longest
def is_defended(attackers, defenders):
    att_c = 0
    def_c = 0
    att_v = 0
    def_v = 0
    for i,j in zip_longest(attackers, defenders,fillvalue=0):
        if i>j:
            att_c+=1
        elif i<j:
            def_c+=1
        att_v+=i
        def_v+=j
    if att_c>def_c:
        return False
    elif att_c<def_c:
        return True
    else:
        return True if def_v>=att_v else False
