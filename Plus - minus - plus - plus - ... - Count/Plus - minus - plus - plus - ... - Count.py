def catch_sign_change(lst):
    return sum([1 for i in range(0,len(lst)-1) if (lst[i+1]<0 and lst[i]>=0) or (lst[i+1]>=0 and lst[i]<0) ])
