def explode(arr):  
    val1,val2 = arr
    if not(str(val1).isdigit()) and not(str(val2).isdigit()):
        return 'Void!'
    
    if str(val1).isdigit() and str(val2).isdigit():
        return [[val1,val2] for i in range(val1+val2)]
    
    if not(str(val1).isdigit()) and str(val2).isdigit():
        return [[val1,val2] for i in range(val2)]
    
    if str(val1).isdigit() and not(str(val2).isdigit()):
        return [[val1,val2] for i in range(val1)]
    
