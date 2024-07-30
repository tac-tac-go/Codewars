def check_condition(amount,con):
    return amount//con

def give_change(amount): 
    val = check_condition(amount,100)
    result = [0]*6
    if(val>0):
        result[5]+=val
        amount-=(val*100)
    val = check_condition(amount,50)
    if(val>0):
        result[4]+=val
        amount-=(val*50)
    val = check_condition(amount,20)
    if(val>0):
        result[3]+=val
        amount-=(val*20)
    val = check_condition(amount,10)
    if(val>0):
        result[2]+=val
        amount-=(val*10)
    val = check_condition(amount,5)
    if(val>0):
        result[1]+=val
        amount-=(val*5)
    val = check_condition(amount,1)
    if(val>0):
        result[0]+=val
        amount-=(val*1)
    return tuple(result)
    
    
