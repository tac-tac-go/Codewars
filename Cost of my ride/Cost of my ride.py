def insurance(age, size, num_of_days): 
    cost = 60 if age<25 else 50
    if size=='economy':
        None
    elif size=='medium':
        cost+=10
    else:
        cost+=15
    return max(0,cost*num_of_days)
