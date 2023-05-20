def guys(n):
    if n==0:
        return ""
    elif n<0:
        return None
    elif n==4:
        return "(-_-)(-_-)(-_-)(-_-)"
    elif n==1:
        return "(-_-)"
    elif n%2==0:
        return "(-_-)"*(n)
    else:
        result_b = "(-_"*(n//2)
        result_a = "_-)"*(n//2)
        return result_b + "(-_-)" + result_a
            
            
