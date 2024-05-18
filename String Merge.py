def string_merge(string1, string2, letter):
    result1 = ""
    result2 = ""
    for i1,v1 in enumerate(string1):
        if letter==v1:
            result1 = string1[:i1]
            break
            
    for i2,v2 in enumerate(string2):
        if letter==v2:
            result2 = string2[i2:]
            break        
    return result1+result2
    
