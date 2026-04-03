def count_sheep(n):
    result = "...".join([str(i)+" sheep" for i in range(1,n+1)])
    return result if result=="" else result+"..."
    
