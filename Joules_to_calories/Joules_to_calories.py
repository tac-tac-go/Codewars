def calories(string):
    v,cal = string.split(" ")
    v = int(v)
    if len(cal)==2:
        v *= 1000
        v /= 4.184
    else:
        v /= 4.184
    return round(v)
        
        
